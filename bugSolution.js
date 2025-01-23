```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // Cleanup function is now guaranteed to run
    return () => {
      isMounted.current = false;
      console.log('Cleanup');
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      console.log('Count:', count);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```