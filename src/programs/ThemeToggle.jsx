import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); // [cite: 1116]

  // Inline styles based on state [cite: 1117, 1120]
  const themeStyle = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
    border: "1px solid gray",
    margin: "10px"
  };

  return (
    <div style={themeStyle}>
      <h3> Theme Toggle</h3>
      <p>Current Mode: {isDark ? "Dark 🌙" : "Light ☀️"}</p>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;