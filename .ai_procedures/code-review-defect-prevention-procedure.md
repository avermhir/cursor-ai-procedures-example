# Code Review Defect Prevention Procedure

**Version**: 1.0  
**Last Updated**: January 6, 2026  
**Purpose**: Prevent common defects from being introduced during code changes through systematic review and testing

---

## Overview

This procedure provides a structured approach to reviewing code changes to catch defects before they reach production. It focuses on common bug patterns that have been identified in the codebase, particularly around React component patterns, state management, and modal interactions.

---

## When to Use This Procedure

### ✅ ALWAYS Use This Procedure When:

1. **Reviewing Pull Requests** - Before approving any PR
2. **After Refactoring** - When refactoring components, modals, or state management
3. **After Adding New Features** - When adding interactive components or forms
4. **Before Merging** - Final check before merging to main/dev branches
5. **After Modal Changes** - Any changes to modal implementations
6. **After State Management Changes** - Changes to hooks, providers, or state logic

### ❌ DON'T Use For:

- Documentation-only changes
- Translation file updates
- Configuration-only changes (unless they affect runtime behavior)

---

## Review Checklist

### Phase 1: Static Code Analysis

#### 1.1 Modal Content Review

**Critical Check**: Verify modal content is reactive, not static JSX

**What to Look For**:
```tsx
// ❌ BAD: Static JSX - won't re-render when state changes
openModal({
    content: (
        <Input
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
        />
    ),
});

// ✅ GOOD: Component with closure access - will re-render
const ModalContent = () => (
    <Input
        value={stateValue}
        onChange={(e) => setStateValue(e.target.value)}
    />
);
openModal({
    content: <ModalContent />,
});
```

**Checklist**:
- [ ] Modal content that uses state is a React component, not static JSX
- [ ] Components have closure access to parent state
- [ ] Input fields in modals are functional (test by typing)
- [ ] Form validation in modals responds to state changes

**Common Bug Pattern**: Static JSX in modals with interactive content (DT-185)

---

#### 1.2 State Management Review

**Critical Check**: Verify state updates trigger re-renders correctly

**What to Look For**:
```tsx
// ❌ BAD: State update that doesn't trigger re-render
const [data, setData] = useState({});
data.property = newValue; // Mutation, won't trigger re-render

// ✅ GOOD: Immutable state update
const [data, setData] = useState({});
setData({ ...data, property: newValue });
```

**Checklist**:
- [ ] State updates use setter functions, not direct mutation
- [ ] Object/array updates are immutable (spread operator, etc.)
- [ ] State dependencies in useEffect/useMemo are correct
- [ ] No stale closures in callbacks

**Common Bug Pattern**: Direct state mutation, missing dependencies

---

#### 1.3 Component Re-rendering Review

**Critical Check**: Verify components re-render when props/state change

**What to Look For**:
```tsx
// ❌ BAD: Component that won't re-render when props change
const MyComponent = React.memo(({ data }) => {
    // Uses data but memo prevents re-render
});

// ✅ GOOD: Proper memoization or no memo if re-renders needed
const MyComponent = ({ data }) => {
    // Will re-render when data changes
};
```

**Checklist**:
- [ ] React.memo is only used when appropriate (performance optimization)
- [ ] Components that need to update are not over-memoized
- [ ] Props are properly passed and not missing
- [ ] Context consumers update when context changes

**Common Bug Pattern**: Over-memoization preventing necessary re-renders

---

#### 1.4 Event Handler Review

**Critical Check**: Verify event handlers are properly bound and functional

**What to Look For**:
```tsx
// ❌ BAD: Event handler that loses context or doesn't work
<Button onClick={handleClick}> // handleClick might be undefined

// ✅ GOOD: Properly defined and bound handlers
<Button onClick={(e) => handleClick(e)}>
// or
const handleClick = useCallback(() => { ... }, [deps]);
<Button onClick={handleClick}>
```

**Checklist**:
- [ ] Event handlers are defined before use
- [ ] Handlers have correct function signatures
- [ ] Async handlers properly handle errors
- [ ] Handlers don't cause infinite loops

**Common Bug Pattern**: Undefined handlers, missing error handling

---

### Phase 2: Interactive Testing

#### 2.1 Modal Testing

**Required Tests**:
- [ ] Open the modal
- [ ] Type into all input fields - verify text appears
- [ ] Change values in form fields - verify state updates
- [ ] Test form validation - verify error states appear
- [ ] Test submit/cancel buttons - verify they work
- [ ] Close modal and reopen - verify state resets correctly

**Focus Areas**:
- Input fields are editable
- State updates are reflected in UI
- Form validation works
- Buttons respond to state changes

---

#### 2.2 Form Testing

**Required Tests**:
- [ ] All input fields accept input
- [ ] Validation messages appear/disappear correctly
- [ ] Submit button enables/disables based on validation
- [ ] Form submission works
- [ ] Error handling displays correctly
- [ ] Loading states work during submission

**Focus Areas**:
- Input field interactivity
- Validation logic
- Submit flow
- Error handling

---

#### 2.3 State-Dependent UI Testing

**Required Tests**:
- [ ] UI updates when state changes
- [ ] Conditional rendering works correctly
- [ ] Loading states appear/disappear
- [ ] Error states display correctly
- [ ] Empty states display when appropriate

**Focus Areas**:
- State-to-UI synchronization
- Conditional rendering logic
- State transitions

---

### Phase 3: Code Pattern Verification

#### 3.1 React Hooks Review

**Checklist**:
- [ ] useEffect dependencies are complete
- [ ] useMemo/useCallback dependencies are correct
- [ ] No hooks called conditionally
- [ ] Custom hooks follow hook rules
- [ ] Cleanup functions in useEffect where needed

**Common Issues**:
- Missing dependencies causing stale closures
- Unnecessary dependencies causing excessive re-renders
- Missing cleanup causing memory leaks

---

#### 3.2 Component Props Review

**Checklist**:
- [ ] Required props are provided
- [ ] Prop types match expected types
- [ ] Default props are set where needed
- [ ] Props are not mutated in child components
- [ ] Props are properly destructured

**Common Issues**:
- Missing required props
- Type mismatches
- Prop mutation

---

#### 3.3 API Integration Review

**Checklist**:
- [ ] API calls handle errors
- [ ] Loading states are managed
- [ ] Response data is validated
- [ ] Network errors are handled gracefully
- [ ] Retry logic where appropriate

**Common Issues**:
- Missing error handling
- No loading states
- Unvalidated API responses

---

## Specific Bug Pattern Checks

### Pattern 1: Static JSX in Modals (DT-185)

**Symptoms**:
- Input fields appear but can't be typed into
- Form fields don't update when state changes
- Buttons don't respond to state changes

**Prevention**:
- Always use React components for interactive modal content
- Test typing into input fields after modal opens
- Verify state updates are reflected in UI

**Code Pattern to Avoid**:
```tsx
// ❌ DON'T: Static JSX with state
openModal({
    content: <Input value={state} onChange={setState} />
});
```

**Code Pattern to Use**:
```tsx
// ✅ DO: Component with closure access
const ModalContent = () => <Input value={state} onChange={setState} />;
openModal({ content: <ModalContent /> });
```

---

### Pattern 2: State Mutation

**Symptoms**:
- UI doesn't update after state change
- Stale data displayed
- Inconsistent state

**Prevention**:
- Always use setter functions
- Use immutable updates (spread operator)
- Verify state updates trigger re-renders

---

### Pattern 3: Missing Dependencies

**Symptoms**:
- Stale closures
- Effects don't run when expected
- Infinite loops in effects

**Prevention**:
- Review all useEffect/useMemo/useCallback dependencies
- Use ESLint exhaustive-deps rule
- Test that effects run at correct times

---

### Pattern 4: Over-Memoization

**Symptoms**:
- Components don't update when they should
- Props changes don't reflect in UI
- Stale data displayed

**Prevention**:
- Only use React.memo for performance optimization
- Verify components update when needed
- Test with prop changes

---

## Review Process

### Step 1: Pre-Review Preparation

1. **Understand the Change**
   - Read the PR description
   - Understand the intended behavior
   - Review related files

2. **Identify Risk Areas**
   - Modals or interactive components
   - State management changes
   - Form implementations
   - API integrations

3. **Prepare Test Scenarios**
   - List all interactive elements
   - Identify state-dependent UI
   - Plan test cases

---

### Step 2: Code Review

1. **Static Analysis**
   - Go through Phase 1 checklist
   - Look for known bug patterns
   - Verify code patterns are correct

2. **Pattern Verification**
   - Check for anti-patterns
   - Verify best practices are followed
   - Review error handling

3. **Document Findings**
   - Note any concerns
   - Identify potential issues
   - Suggest improvements

---

### Step 3: Interactive Testing

1. **Manual Testing**
   - Test all interactive elements
   - Verify state updates work
   - Test error scenarios

2. **Edge Case Testing**
   - Test with empty data
   - Test with invalid data
   - Test error conditions

3. **Integration Testing**
   - Test with related features
   - Verify no regressions
   - Test user workflows

---

### Step 4: Review Decision

**Approve If**:
- ✅ All checklist items pass
- ✅ Interactive testing successful
- ✅ No known bug patterns present
- ✅ Code follows best practices

**Request Changes If**:
- ❌ Any critical checklist item fails
- ❌ Interactive testing reveals issues
- ❌ Known bug patterns detected
- ❌ Code doesn't follow best practices

**Block If**:
- 🚫 Critical functionality broken
- 🚫 Security issues identified
- 🚫 Data loss risk
- 🚫 Breaking changes without migration

---

## Testing Requirements

### Minimum Testing Before Approval

1. **Functional Testing**
   - All features work as intended
   - No console errors
   - No broken functionality

2. **Interactive Testing**
   - All inputs are editable
   - Forms submit correctly
   - Modals work properly

3. **State Testing**
   - State updates correctly
   - UI reflects state changes
   - No stale data

4. **Error Testing**
   - Error handling works
   - Error messages display
   - Graceful degradation

---

## Common Red Flags

Watch for these warning signs:

1. **Modal Content**
   - Static JSX with state variables
   - Input fields that might not be editable
   - Forms in modals without component wrapper

2. **State Management**
   - Direct object/array mutation
   - Missing dependencies in hooks
   - State updates that don't trigger re-renders

3. **Component Patterns**
   - Over-memoization
   - Missing prop validation
   - Conditional hook calls

4. **Event Handlers**
   - Undefined handlers
   - Missing error handling
   - Async operations without loading states

---

## Documentation Requirements

### PR Description Should Include

1. **What Changed**
   - Description of changes
   - Files modified
   - Features added/changed

2. **Testing Performed**
   - Manual testing done
   - Test scenarios covered
   - Known limitations

3. **Risk Assessment**
   - Potential impact areas
   - Breaking changes
   - Migration needs

---

## Integration with Existing Processes

### Pre-Commit Hooks

This procedure complements pre-commit hooks by:
- Catching issues hooks might miss
- Focusing on interactive behavior
- Verifying user experience

### CI/CD Pipeline

This procedure works with CI/CD by:
- Adding manual review step
- Catching issues automated tests miss
- Verifying real-world usage

### Code Review Process

This procedure enhances code review by:
- Providing structured checklist
- Focusing on common bug patterns
- Ensuring thorough testing

---

## Review Time Estimates

- **Small Changes** (< 50 lines): 15-30 minutes
- **Medium Changes** (50-200 lines): 30-60 minutes
- **Large Changes** (200+ lines): 1-2 hours
- **Refactorings**: 1-3 hours (depending on scope)

---

## Success Metrics

Track these metrics to measure effectiveness:

1. **Defect Rate**: Bugs found in production vs. caught in review
2. **Review Coverage**: Percentage of PRs using this procedure
3. **Time to Fix**: Time to fix issues found in review vs. production
4. **Pattern Detection**: Number of known patterns caught before merge

---

## Continuous Improvement

### Update This Procedure When

1. **New Bug Patterns Identified**
   - Add to specific bug pattern checks
   - Update checklist items
   - Add prevention strategies

2. **Process Improvements**
   - Refine checklist items
   - Update testing requirements
   - Improve review process

3. **Tool Improvements**
   - Add automated checks
   - Integrate new tools
   - Update best practices

---

## Related Procedures

- **User Feedback Investigation Procedure**: For investigating bugs found in production
- **PR Merge Workflow**: For merge safety checks
- **QA Pre-Commit Checklist**: For pre-commit validation

---

## Examples

### Example 1: Modal Refactoring Review

**Scenario**: Refactoring modals to use ModalProvider

**Review Steps**:
1. ✅ Check modal content is component, not static JSX
2. ✅ Test typing into input fields
3. ✅ Verify state updates work
4. ✅ Test form submission
5. ✅ Verify modal closes correctly

**Result**: Caught static JSX issue before merge

---

### Example 2: Form Component Review

**Scenario**: Adding new form with validation

**Review Steps**:
1. ✅ Check form state management
2. ✅ Verify validation logic
3. ✅ Test all input fields
4. ✅ Test error states
5. ✅ Test submit flow

**Result**: Approved after verification

---

## Notes

- This procedure is a living document - update as new patterns are identified
- Focus on prevention rather than detection
- When in doubt, request changes rather than approve
- Better to catch issues early than in production

---

**Version History**:
- v1.0 (2026-01-06): Initial version based on DT-185 root cause analysis

