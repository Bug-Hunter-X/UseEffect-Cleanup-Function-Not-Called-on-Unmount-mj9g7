# useEffect Cleanup Function Not Called on Unmount
This example demonstrates a subtle issue where the cleanup function in a React `useEffect` hook might not be called if the component unmounts before the effect has a chance to run.

## Bug Description
The `useEffect` hook is used to perform side effects.  The optional return function is crucial for cleanup, such as canceling subscriptions or timers. However, if the component unmounts rapidly before the effect even executes, this cleanup function is skipped, potentially leading to memory leaks or other unexpected behavior.

## Reproduction
The `bug.js` file contains the buggy code.  The component renders, but if you rapidly unmount it (e.g., by quickly navigating away), you'll notice that the 'Cleanup' message never appears in the console.

## Solution
The `bugSolution.js` file shows the solution to this problem by carefully managing the effect's execution and handling potential unmounts during the cleanup process.