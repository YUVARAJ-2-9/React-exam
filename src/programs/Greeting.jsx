import { useState, useEffect } from "react";

function Greeting() {
  const [time, setTime] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const updateEverything = () => {
      const now = new Date();
      const hour = now.getHours(); // Current hour-a edukkom [cite: 665]

      // Step 1: Greeting Logic [cite: 666, 667, 668, 669, 670]
      if (hour < 12) setMsg("Good Morning ☀️");
      else if (hour < 17) setMsg("Good Afternoon 🌤️");
      else if (hour < 20) setMsg("Good Evening 🌆");
      else setMsg("Good Night 🌙");

      // Step 2: Live Time Logic
      setTime(now.toLocaleTimeString()); 
    };

    updateEverything(); // Initial load update
    const timer = setInterval(updateEverything, 1000); // 1 sec once refresh

    return () => clearInterval(timer); // Cleanup [cite: 699]
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid gray", margin: "10px", textAlign: "center" }}>
      <h3>Dynamic Greeting & Time</h3>
      
      {/* Greeting and Time orey edathula neat-ah kaatum */}
      <h2 style={{ color: "blue" }}>{msg}</h2>
      <h1 style={{ fontSize: "40px", color: "#333" }}>{time}</h1>
      
      <p>Updates based on system time.</p> 
    </div>
  );
}

export default Greeting;