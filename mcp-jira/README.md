# Jira MCP Server

Model Context Protocol (MCP) server for Jira integration with Cursor AI.

## Features

- ✅ Create issues
- ✅ Update issues
- ✅ Add comments
- ✅ Search issues with JQL
- ✅ Transition issues (change status)
- ✅ Get issue details
- ✅ Get project information

## Setup

### 1. Install Dependencies

```bash
cd mcp-jira
npm install
```

### 2. Configure Jira Credentials

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your Jira details:
   - `JIRA_HOST`: Your Jira instance (e.g., `yourcompany.atlassian.net`)
   - `JIRA_USERNAME`: Your Jira email
   - `JIRA_API_TOKEN`: Generate at https://id.atlassian.com/manage-profile/security/api-tokens

### 3. Build the Server

```bash
npm run build
```

### 4. Configure Cursor

Add to your Cursor MCP settings (Settings → Features → Model Context Protocol):

```json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["/absolute/path/to/your/project/mcp-jira/dist/index.js"],
      "env": {
        "JIRA_HOST": "your-workspace.atlassian.net",
        "JIRA_USERNAME": "your-email@example.com",
        "JIRA_API_TOKEN": "your-api-token"
      }
    }
  }
}
```

**Note:** Replace `/absolute/path/to/your/project/` with the actual path to your project directory. For example:
- Windows: `C:/Users/YourName/Projects/cd-backend/mcp-jira/dist/index.js`
- macOS/Linux: `/Users/YourName/Projects/cd-backend/mcp-jira/dist/index.js`

Or use the `.env` file approach:

```json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["/absolute/path/to/your/project/mcp-jira/dist/index.js"],
      "cwd": "/absolute/path/to/your/project/mcp-jira"
    }
  }
}
```

### 5. Restart Cursor

After adding the MCP configuration, restart Cursor to load the Jira server.

## Available Tools

### `jira_create_issue`
Create a new Jira issue.

**Parameters:**
- `project` (required): Project key (e.g., "PROJ")
- `summary` (required): Issue title
- `description` (required): Issue description
- `issueType`: Issue type (default: "Task")
- `priority`: Priority (default: "Medium")
- `labels`: Array of labels
- `assignee`: Assignee username

**Example:**
```
Create a Jira issue in project DT with title "Fix dashboard bug" and description "Users report assignments not showing"
```

### `jira_update_issue`
Update an existing issue.

**Parameters:**
- `issueKey` (required): Issue key (e.g., "PROJ-123")
- `summary`: New title
- `description`: New description
- `status`: New status
- `assignee`: New assignee
- `labels`: New labels array

**Example:**
```
Update DT-123 to set status to "In Progress" and assign to john@example.com
```

### `jira_add_comment`
Add a comment to an issue.

**Parameters:**
- `issueKey` (required): Issue key
- `comment` (required): Comment text

**Example:**
```
Add comment to DT-123: "Fixed in commit abc123"
```

### `jira_get_issue`
Get details of an issue.

**Parameters:**
- `issueKey` (required): Issue key

**Example:**
```
Get details of issue DT-123
```

### `jira_search_issues`
Search for issues using JQL.

**Parameters:**
- `jql` (required): JQL query string
- `maxResults`: Maximum results (default: 50)
- `fields`: Fields to include

**Example:**
```
Search for open bugs in DT project
```

### `jira_transition_issue`
Transition an issue to a new status.

**Parameters:**
- `issueKey` (required): Issue key
- `transitionName` (required): Transition name (e.g., "Start Progress", "Done")

**Example:**
```
Transition DT-123 to Done
```

### `jira_get_project_info`
Get project information.

**Parameters:**
- `projectKey` (required): Project key

**Example:**
```
Get info about DT project
```

## Usage in Cursor

Once configured, you can use natural language to interact with Jira:

- "Create a Jira issue for the dashboard bug"
- "Add a comment to DT-123 about the fix"
- "Search for all open bugs in DT"
- "Move DT-123 to In Progress"
- "Get details of DT-123"

The AI will automatically use the appropriate Jira MCP tools.

## Troubleshooting

### Connection Issues
- Verify your API token is valid
- Check that JIRA_HOST doesn't include `https://`
- Ensure you have proper permissions in Jira

### Server Not Starting
- Run `npm run build` to rebuild
- Check the MCP logs in Cursor (View → Output → MCP)
- Verify the path in your Cursor config is correct

### Permission Errors
- Ensure your Jira user has permissions to create/edit issues
- Check project permissions in Jira settings

## Development

```bash
# Build
npm run build

# Run directly
npm start

# Development mode (rebuild + run)
npm run dev
```

## License

MIT
