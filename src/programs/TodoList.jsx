import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState(""); // Input field-gaagi
  const [tasks, setTasks] = useState([]); // Ella tasks-annu store mada array

  // Task add mada logic
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); // Input-a clear mada
    }
  };

  // Task-a delete mada logic
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Task complete aytu nu mark mada logic
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Level 1: To-Do List</h2>
      
      <div style={{ marginBottom: "20px" }}>
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a task..."
          style={{ padding: "10px", width: "70%", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <button onClick={addTask} style={{ padding: "10px", marginLeft: "5px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            padding: "10px", 
            borderBottom: "1px solid #eee",
            textDecoration: t.completed ? "line-through" : "none",
            color: t.completed ? "gray" : "black"
          }}>
            <span onClick={() => toggleComplete(index)} style={{ cursor: "pointer" }}>{t.text}</span>
            <button onClick={() => deleteTask(index)} style={{ background: "#dc3545", color: "white", border: "none", borderRadius: "3px", cursor: "pointer" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;