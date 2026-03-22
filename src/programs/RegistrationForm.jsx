import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true); // Submit panna udane data-va kaata
  };

  return (
    <div style={{ padding: "20px", border: "1px solid gray", margin: "10px" }}>
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required /><br/><br/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
        <button type="submit">Submit</button>
      </form>

      {display && (
        <div style={{ marginTop: "15px", color: "blue" }}>
          <h4>Entered Details:</h4>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;