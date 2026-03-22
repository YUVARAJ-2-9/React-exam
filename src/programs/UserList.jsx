import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]); // [cite: 892]

  useEffect(() => {
    // API-la irundhu data edukkurom [cite: 894, 895]
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)); // [cite: 896, 897]
  }, []);

  return (
    <div style={{ padding: "10px", border: "1px solid gray", margin: "10px" }}>
      <h3>Level 4: User List (API Fetch)</h3>
      {users.map((user) => (
        <div key={user.id} style={{ borderBottom: "1px dotted black", padding: "5px" }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;