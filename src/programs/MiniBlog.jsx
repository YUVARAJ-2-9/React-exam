import { useState } from "react";

function MiniBlog() {
  const [view, setView] = useState("home"); // [cite: 1228]
  const posts = [
    { id: 1, title: "React Intro", content: "React is a JS library..." },
    { id: 2, title: "Components", content: "Components are building blocks..." }
  ]; // [cite: 1226]

  return (
    <div style={{ padding: "10px", border: "1px solid gray", margin: "10px" }}>
      <h3> Mini Blog</h3>
      
      {view === "home" ? (
        <div>
          <h4>Home Page - Posts</h4>
          {posts.map(post => (
            <div key={post.id} style={{ marginBottom: "10px" }}>
              <span>{post.title} </span>
              <button onClick={() => setView(post.id)}>Read More</button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h4>Post Details</h4>
          <p><strong>Content:</strong> {posts.find(p => p.id === view).content}</p>
          <button onClick={() => setView("home")}>Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default MiniBlog;