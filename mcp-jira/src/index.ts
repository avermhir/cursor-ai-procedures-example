#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import JiraClient from 'jira-client';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Jira client
const jira = new JiraClient({
    protocol: 'https',
    host: process.env.JIRA_HOST || '',
    username: process.env.JIRA_USERNAME || '',
    password: process.env.JIRA_API_TOKEN || '',
    apiVersion: '3',
    strictSSL: true,
});

// Helper function for API v3 requests
async function jiraApiV3Request(endpoint: string, method: string = 'GET', body?: any) {
    const auth = Buffer.from(`${process.env.JIRA_USERNAME}:${process.env.JIRA_API_TOKEN}`).toString('base64');

    const response = await fetch(`https://${process.env.JIRA_HOST}/rest/api/3/${endpoint}`, {
        method,
        headers: {
            Authorization: `Basic ${auth}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }

    // Handle 204 No Content responses (e.g., from PUT requests)
    if (response.status === 204 || response.headers.get('content-length') === '0') {
        return null;
    }

    return response.json();
}

// Direct API call for search (API v3 endpoint)
async function searchJiraV3(jql: string, maxResults: number, fields: string[]) {
    return jiraApiV3Request(
        'search',
        'POST',
        {
            jql: jql,
            maxResults: maxResults,
            fields: fields,
        },
    );
}

// Create issue using API v3 (supports ADF)
async function createIssueV3(issueData: any) {
    return jiraApiV3Request('issue', 'POST', issueData);
}

// Update issue using API v3 (supports ADF)
async function updateIssueV3(issueKey: string, updateData: any): Promise<void> {
    await jiraApiV3Request(`issue/${issueKey}`, 'PUT', updateData);
}

// Add comment using API v3 (supports ADF)
async function addCommentV3(issueKey: string, commentBody: any) {
    return jiraApiV3Request(`issue/${issueKey}/comment`, 'POST', commentBody);
}

// Get issue using API v3
async function getIssueV3(issueKey: string) {
    return jiraApiV3Request(`issue/${issueKey}?expand=names,renderedFields`);
}

// List transitions using API v3
async function listTransitionsV3(issueKey: string) {
    return jiraApiV3Request(`issue/${issueKey}/transitions`);
}

// Transition issue using API v3
async function transitionIssueV3(issueKey: string, transitionId: string) {
    await jiraApiV3Request(`issue/${issueKey}/transitions`, 'POST', {
        transition: { id: transitionId },
    });
}

// Get project info using API v3
async function getProjectV3(projectKey: string) {
    return jiraApiV3Request(`project/${projectKey}`);
}

// Convert markdown/plain text to Atlassian Document Format (ADF)
function textToADF(text: string): any {
    if (!text || text.trim() === '') {
        return {
            type: 'doc',
            version: 1,
            content: [
                {
                    type: 'paragraph',
                    content: [],
                },
            ],
        };
    }

    // Split by lines and process
    const lines = text.split('\n');
    const content: any[] = [];

    for (const line of lines) {
        if (line.trim() === '') {
            // Empty line - add paragraph break
            if (content.length > 0 && content[content.length - 1].type === 'paragraph') {
                content.push({
                    type: 'paragraph',
                    content: [],
                });
            }
            continue;
        }

        // Check for headers (## Header)
        if (line.startsWith('## ')) {
            content.push({
                type: 'heading',
                attrs: { level: 2 },
                content: [{ type: 'text', text: line.substring(3).trim() }],
            });
        } else if (line.startsWith('### ')) {
            content.push({
                type: 'heading',
                attrs: { level: 3 },
                content: [{ type: 'text', text: line.substring(4).trim() }],
            });
        } else if (line.startsWith('#### ')) {
            content.push({
                type: 'heading',
                attrs: { level: 4 },
                content: [{ type: 'text', text: line.substring(5).trim() }],
            });
        } else if (line.startsWith('- ') || line.startsWith('* ')) {
            // Bullet list item
            content.push({
                type: 'bulletList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: parseInlineFormatting(line.substring(2).trim()),
                            },
                        ],
                    },
                ],
            });
        } else if (/^\d+\.\s/.test(line)) {
            // Numbered list item
            content.push({
                type: 'orderedList',
                content: [
                    {
                        type: 'listItem',
                        content: [
                            {
                                type: 'paragraph',
                                content: parseInlineFormatting(line.replace(/^\d+\.\s/, '').trim()),
                            },
                        ],
                    },
                ],
            });
        } else if (line.startsWith('```')) {
            // Code block (simplified - just mark as code)
            continue; // Skip code block markers for now
        } else {
            // Regular paragraph
            const paragraphContent = parseInlineFormatting(line.trim());
            if (paragraphContent.length > 0) {
                content.push({
                    type: 'paragraph',
                    content: paragraphContent,
                });
            }
        }
    }

    // If no content, add empty paragraph
    if (content.length === 0) {
        content.push({
            type: 'paragraph',
            content: [],
        });
    }

    return {
        type: 'doc',
        version: 1,
        content: content,
    };
}

// Parse inline formatting (bold, italic, code, links)
function parseInlineFormatting(text: string): any[] {
    const result: any[] = [];

    // For simplicity, just convert to plain text for now
    // More complex parsing can be added later
    // TODO: Implement full markdown-to-ADF inline formatting support
    if (text.trim()) {
        result.push({ type: 'text', text: text });
    }

    return result.length > 0 ? result : [{ type: 'text', text: text }];
}

// Define available tools
const TOOLS: Tool[] = [
    {
        name: 'jira_create_issue',
        description: 'Create a new Jira issue',
        inputSchema: {
            type: 'object',
            properties: {
                project: {
                    type: 'string',
                    description: 'Project key (e.g., "PROJ")',
                },
                summary: {
                    type: 'string',
                    description: 'Issue summary/title',
                },
                description: {
                    type: 'string',
                    description: 'Issue description (supports Jira markdown)',
                },
                issueType: {
                    type: 'string',
                    description: 'Issue type (e.g., "Task", "Bug", "Story")',
                    default: 'Task',
                },
                priority: {
                    type: 'string',
                    description: 'Priority (e.g., "High", "Medium", "Low")',
                    default: 'Medium',
                },
                labels: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Array of labels',
                },
                assignee: {
                    type: 'string',
                    description: 'Assignee username or email',
                },
            },
            required: ['project', 'summary', 'description'],
        },
    },
    {
        name: 'jira_update_issue',
        description: 'Update an existing Jira issue',
        inputSchema: {
            type: 'object',
            properties: {
                issueKey: {
                    type: 'string',
                    description: 'Issue key (e.g., "PROJ-123")',
                },
                summary: {
                    type: 'string',
                    description: 'New summary/title',
                },
                description: {
                    type: 'string',
                    description: 'New description',
                },
                status: {
                    type: 'string',
                    description: 'New status (e.g., "In Progress", "Done")',
                },
                assignee: {
                    type: 'string',
                    description: 'New assignee username or email',
                },
                labels: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Array of labels to set',
                },
            },
            required: ['issueKey'],
        },
    },
    {
        name: 'jira_add_comment',
        description: 'Add a comment to a Jira issue',
        inputSchema: {
            type: 'object',
            properties: {
                issueKey: {
                    type: 'string',
                    description: 'Issue key (e.g., "PROJ-123")',
                },
                comment: {
                    type: 'string',
                    description: 'Comment text (supports Jira markdown)',
                },
            },
            required: ['issueKey', 'comment'],
        },
    },
    {
        name: 'jira_get_issue',
        description: 'Get details of a Jira issue',
        inputSchema: {
            type: 'object',
            properties: {
                issueKey: {
                    type: 'string',
                    description: 'Issue key (e.g., "PROJ-123")',
                },
            },
            required: ['issueKey'],
        },
    },
    {
        name: 'jira_search_issues',
        description: 'Search for Jira issues using JQL',
        inputSchema: {
            type: 'object',
            properties: {
                jql: {
                    type: 'string',
                    description: 'JQL query string (e.g., "project = PROJ AND status = Open")',
                },
                maxResults: {
                    type: 'number',
                    description: 'Maximum number of results',
                    default: 50,
                },
                fields: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Fields to include in results',
                },
            },
            required: ['jql'],
        },
    },
    {
        name: 'jira_transition_issue',
        description: 'Transition an issue to a new status',
        inputSchema: {
            type: 'object',
            properties: {
                issueKey: {
                    type: 'string',
                    description: 'Issue key (e.g., "PROJ-123")',
                },
                transitionName: {
                    type: 'string',
                    description: 'Transition name (e.g., "Start Progress", "Done")',
                },
            },
            required: ['issueKey', 'transitionName'],
        },
    },
    {
        name: 'jira_get_project_info',
        description: 'Get information about a Jira project',
        inputSchema: {
            type: 'object',
            properties: {
                projectKey: {
                    type: 'string',
                    description: 'Project key (e.g., "PROJ")',
                },
            },
            required: ['projectKey'],
        },
    },
];

// Create MCP server
const server = new Server(
    {
        name: 'jira-mcp-server',
        version: '1.0.0',
    },
    {
        capabilities: {
            tools: {},
        },
    },
);

// Handle list tools request
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return { tools: TOOLS };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (!args) {
        throw new Error('Missing arguments');
    }

    try {
        switch (name) {
            case 'jira_create_issue': {
                // Convert description to ADF format
                const descriptionADF = textToADF(args.description as string);

                // Build fields object
                const fields: any = {
                    project: { key: args.project as string },
                    summary: args.summary as string,
                    description: descriptionADF,
                    issuetype: { name: (args.issueType as string) || 'Task' },
                };

                if (args.priority) {
                    fields.priority = { name: args.priority as string };
                }

                if (args.labels && Array.isArray(args.labels) && args.labels.length > 0) {
                    fields.labels = args.labels as string[];
                }

                if (args.assignee) {
                    fields.assignee = { name: args.assignee as string };
                }

                // Use API v3 directly to support ADF format
                const issue = await createIssueV3({ fields });

                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify(
                                {
                                    success: true,
                                    issueKey: issue.key,
                                    issueId: issue.id,
                                    url: `https://${process.env.JIRA_HOST}/browse/${issue.key}`,
                                },
                                null,
                                2,
                            ),
                        },
                    ],
                };
            }

            case 'jira_update_issue': {
                const updateData: any = { fields: {} };

                if (args.summary) updateData.fields.summary = args.summary as string;
                if (args.description) updateData.fields.description = textToADF(args.description as string);
                if (args.assignee) updateData.fields.assignee = { name: args.assignee as string };
                if (args.labels) updateData.fields.labels = args.labels as string[];

                // Use API v3 directly to support ADF format
                await updateIssueV3(args.issueKey as string, updateData);

                // Handle status transition separately if provided
                if (args.status) {
                    const transitions = await listTransitionsV3(args.issueKey as string);
                    const transition = transitions.transitions.find(
                        (t: any) => t.name.toLowerCase() === (args.status as string).toLowerCase(),
                    );

                    if (transition) {
                        await transitionIssueV3(args.issueKey as string, transition.id);
                    }
                }

                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify(
                                {
                                    success: true,
                                    issueKey: args.issueKey as string,
                                    message: 'Issue updated successfully',
                                },
                                null,
                                2,
                            ),
                        },
                    ],
                };
            }

            case 'jira_add_comment': {
                // Convert comment text to ADF format
                const commentADF = textToADF(args.comment as string);
                const commentBody = {
                    body: commentADF,
                };

                const comment = await addCommentV3(args.issueKey as string, commentBody);

                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify(
                                {
                                    success: true,
                                    commentId: comment.id,
                                    issueKey: args.issueKey as string,
                                },
                                null,
                                2,
                            ),
                        },
                    ],
                };
            }

            case 'jira_get_issue': {
                const issue = await getIssueV3(args.issueKey as string);

                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify(
                                {
                                    key: issue.key,
                                    summary: issue.fields.summary,
                                    description: issue.fields.description,
                                    status: issue.fields.status.name,
                                    assignee: issue.fields.assignee?.displayName || 'Unassigned',
                                    priority: issue.fields.priority?.name,
                                    created: issue.fields.created,
                                    updated: issue.fields.updated,
                                    labels: issue.fields.labels,
                                    url: `https://${process.env.JIRA_HOST}/browse/${issue.key}`,
                                },
                                null,
                                2,
                            ),
                        },
                    ],
                };
            }

            case 'jira_search_issues': {
                const searchResults = await searchJiraV3(
                    args.jql as string,
                    (args.maxResults as number) || 50,
                    (args.fields as string[]) || ['summary', 'status', 'assignee', 'priority'],
                );

                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify(
                                {
                                    total: searchResults.total,
                                    issues: searchResults.issues.map((issue: any) => ({
                                        key: issue.key,
                                        summary: issue.fields.summary,
                                        status: issue.fields.status?.name,
                                        assignee: issue.fields.assignee?.displayName,
                                        priority: issue.fields.priority?.name,
                                    })),
                                },
                                null,
                                2,
                            ),
                        },
                    ],
                };
            }

            case 'jira_transition_issue': {
                const transitions = await listTransitionsV3(args.issueKey as string);
                const transition = transitions.transitions.find(
                    (t: any) => t.name.toLowerCase() === (args.transitionName as string).toLowerCase(),
                );

                if (!transition) {
                    throw new Error(
                        `Transition "${args.transitionName as string}" not found. Available: ${transitions.transitions
                            .map((t: any) => t.name)
                            .join(', ')}`,
                    );
                }

                await transitionIssueV3(args.issueKey as string, transition.id);

                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify(
                                {
                                    success: true,
                                    issueKey: args.issueKey as string,
                                    newStatus: transition.name,
                                },
                                null,
                                2,
                            ),
                        },
                    ],
                };
            }

            case 'jira_get_project_info': {
                const project = await getProjectV3(args.projectKey as string);

                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify(
                                {
                                    key: project.key,
                                    name: project.name,
                                    description: project.description,
                                    lead: project.lead?.displayName,
                                    issueTypes: project.issueTypes.map((type: any) => type.name),
                                    url: `https://${process.env.JIRA_HOST}/browse/${project.key}`,
                                },
                                null,
                                2,
                            ),
                        },
                    ],
                };
            }

            default:
                throw new Error(`Unknown tool: ${name}`);
        }
    } catch (error: any) {
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(
                        {
                            success: false,
                            error: error.message,
                            stack: error.stack,
                        },
                        null,
                        2,
                    ),
                },
            ],
            isError: true,
        };
    }
});

// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Jira MCP server running on stdio');
}

main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
});
