import { useState } from "react";

function ColorPicker() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div style={{ padding: "20px", border: "1px solid gray", margin: "10px", textAlign: "center" }}>
      <h3>Color Picker</h3>
      <button onClick={() => setBgColor("red")}>Red</button>
      <button onClick={() => setBgColor("blue")}>Blue</button>
      <button onClick={() => setBgColor("green")}>Green</button>

      <div style={{ 
        width: "150px", 
        height: "50px", 
        backgroundColor: bgColor, 
        margin: "20px auto", 
        border: "1px solid black" 
      }}>
        Background: {bgColor}
      </div>
    </div>
  );
}

export default ColorPicker;