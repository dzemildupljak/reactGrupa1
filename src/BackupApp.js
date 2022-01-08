import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [newtask, setNewtask] = useState({
    title: "",
    isDone: false,
  });
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();

    setNewtask((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const addNewTask = () => {
    if (newtask.title !== "") {
      setTasks((prevState) => {
        if (prevState.length === 0) {
          return [{ id: 1, ...newtask }];
        } else {
          return [
            ...prevState,
            { id: prevState[prevState.length - 1].id + 1, ...newtask },
          ];
        }
      });

      setNewtask({ title: "", isDone: false });
    }
  };

  const removeLastTask = () => {
    setTasks(
      tasks.filter((t, i) => {
        return i !== tasks.length - 1 && t;
      })
    );
  };

  const handleTaskDone = (index) => {
    setTasks(
      tasks.map((t, i) => {
        if (i === index) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  const removeSpecTask = (index) => {
    setTasks((prevState) => {
      return prevState.filter((t, i) => {
        if (i !== index) {
          return t;
        }
      });
    });
  };

  useEffect(() => {
    console.log("USEEFFEC");
  }, [tasks]);

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
        {tasks.map((t) => {
          return (
            <li key={t.id}>
              <span className={`${t.isDone ? "task-done" : ""}`}>
                {t.title}
              </span>
              <input
                type="checkbox"
                value={t.isDone}
                onChange={() => {
                  handleTaskDone(t.id);
                }}
              />
              <span
                className="remove-task"
                onClick={() => {
                  removeSpecTask(t.id);
                }}
              >
                x
              </span>
            </li>
          );
        })}
      </ul>

      <button onClick={removeLastTask}>remove last task</button>
    </div>
  );
}

export default App;
