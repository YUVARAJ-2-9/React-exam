import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState(""); // [cite: 220]
  const [list, setList] = useState([]); // [cite: 219]

  const add = () => {
    setList([...list, text]); // 
    setText(""); // [cite: 225]
  };

  return (
    <div>
      <h3>My Tasks</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} /> {/* [cite: 236] */}
      <button onClick={add}>Add</button> {/* [cite: 238] */}
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)} {/* [cite: 240] */}
      </ul>
    </div>
  );
}