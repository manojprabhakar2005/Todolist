import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const add = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Simple Todo List</h1>

      
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          
        />
        <button onClick={add}>Add Task</button>
      </div>

      
      <div className="tasks-list">
        {tasks.map((item, index) => (
          <div key={index} className="task-item">
            <span>{item}</span>
            <button onClick={() => deleteTask(index)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}

        {tasks.length === 0 && <p>No tasks yet. Add one above!</p>}
      </div>
    </div>
  );
}

export default App;
