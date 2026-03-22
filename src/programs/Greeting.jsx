import { useState, useEffect } from "react";

function Greeting() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const hour = new Date().getHours(); // Current hour-a edukkom [cite: 665]
    if (hour < 12) setMsg("Good Morning ☀️");
    else if (hour < 17) setMsg("Good Afternoon 🌤️");
    else if (hour < 20) setMsg("Good Evening 🌆");
    else setMsg("Good Night 🌙");
  }, []); // Component load aagum bodhu oru vaati check pannum [cite: 699]

  return (
    <div style={{ padding: "20px", border: "1px solid gray", margin: "10px", textAlign: "center" }}>
      <h3> Dynamic Greeting</h3>
      <h2 style={{ color: "blue" }}>{msg}</h2>
      <p>Time based conditional rendering test.</p>
    </div>
  );
}

export default Greeting;