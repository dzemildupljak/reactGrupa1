import React, { useState } from "react";
import "./App.css";

function App() {
  const [newtask, setNewtask] = useState({
    title: "",
    isDone: false,
  });
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();

    setNewtask({ ...newtask, title: e.target.value });
  };

  const addNewTask = () => {
    if (newtask.title !== "") {
      setTasks([...tasks, newtask]);
      setNewtask({ title: "" });
    }
  };

  const removeLastTask = () => {
    setTasks(
      tasks.filter((t, i) => {
        if (i !== tasks.length - 1) {
          return t;
        }
      })
    );
  };

  return (
    <div className="container">
      <label htmlFor="name-input">Unesite ime </label>
      <input
        name="name-input"
        type="text"
        placeholder="Unesite ime"
        value={newtask.title}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <button onClick={addNewTask}> add new task</button>

      <ul>
        {tasks.map((t, i) => {
          return (
            <li key={i}>
              <span>{t.title}</span>
              {/* TODO change checkbox value onClick */}
              <input type="checkbox" value={t.isDone} />
            </li>
          );
        })}
      </ul>

      <button onClick={removeLastTask}>remove last task</button>
    </div>
  );
}

export default App;
