import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Counter App</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ padding: '10px 20px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;