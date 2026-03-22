import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Inputs-a number-ah mathurom [cite: 783, 784]
  const a = Number(num1);
  const b = Number(num2);

  return (
    <div style={{ padding: "20px", border: "1px solid gray", margin: "10px" }}>
      <h3> Real-Time Calculator</h3>
      <input type="number" placeholder="Num 1" onChange={(e) => setNum1(e.target.value)} />
      <input type="number" placeholder="Num 2" onChange={(e) => setNum2(e.target.value)} style={{ marginLeft: "10px" }} />

      <div style={{ marginTop: "15px", fontWeight: "bold" }}>
        <p>Addition: {a + b}</p>
        <p>Subtraction: {a - b}</p>
        <p>Multiplication: {a * b}</p>
        <p>Division: {b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero"}</p> 
      </div>
    </div>
  );
}

export default Calculator;