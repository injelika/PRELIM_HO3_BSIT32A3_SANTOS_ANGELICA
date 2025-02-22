import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { taskName: task, done: false, isEditing: false }]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTasks(tasks.map((t, i) => (i === index ? { ...t, done: !t.done } : t)));
  };

  const toggleEdit = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, isEditing: !t.isEditing } : t))
    );
  };

  const saveTask = (index, newTask) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, taskName: newTask, isEditing: false } : t
      )
    );
  };

  return (
    <div className="container mt-5">
      <section>
        <h2 className="text-center">
          <b> To-Do List </b>
        </h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control custom-input"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn custom-btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul className="list-group">
          {tasks.map((taskObj, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center custom-task-item"
            >
              {taskObj.isEditing ? (
                <input
                  type="text"
                  className="form-control"
                  value={taskObj.taskName}
                  onChange={(e) => {
                    setTasks(
                      tasks.map((t, i) =>
                        i === index ? { ...t, taskName: e.target.value } : t
                      )
                    );
                  }}
                  onBlur={() => saveTask(index, taskObj.taskName)}
                />
              ) : (
                <span
                  style={{
                    textDecoration: taskObj.done ? "line-through" : "none",
                  }}
                >
                  {taskObj.taskName}
                </span>
              )}

              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => toggleDone(index)}
                >
                  {taskObj.done ? "Undone" : "Done"}
                </button>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => toggleEdit(index)}
                >
                  {taskObj.isEditing ? "Save" : "Edit"}
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ToDoList;
