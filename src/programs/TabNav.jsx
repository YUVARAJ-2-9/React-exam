import { useState } from "react";

function TabNav() {
  const [activeTab, setActiveTab] = useState("home"); // [cite: 988]

  return (
    <div style={{ padding: "10px", border: "1px solid gray", margin: "10px", textAlign: "center" }}>
      <h3> Tab Navigation</h3>
      <div>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </div>

      <div style={{ marginTop: "10px", padding: "10px", background: "#eee" }}>
        {activeTab === "home" && <p>Welcome to Home Page! 🏠</p>}
        {activeTab === "about" && <p>This is the About Page. 📖</p>}
        {activeTab === "contact" && <p>Contact us at: support@example.com 📧</p>}
      </div>
    </div>
  );
}

export default TabNav;