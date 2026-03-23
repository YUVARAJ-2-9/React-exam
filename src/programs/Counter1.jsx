import { useState } from "react";
import React from 'react'

function Counter1() {
    const [counter ,setCounter] =useState(0)
  return (
    <div>
      <h1>React Counter App</h1>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
      <button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
      <button onClick={() => setCounter(0)}>RESET</button>
    </div>
  )
}

export default Counter1
