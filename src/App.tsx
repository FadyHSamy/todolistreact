import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleTaskSubmit = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className="h-screen" style={{ background: "#384152" }}>
      <label className="text-5xl content-center flex justify-center" style={{ color: "#687182", padding: "30px" }}>
        Task List 2024
      </label>
      <TodoItem onTaskSubmit={handleTaskSubmit} />
      <TodoList arrayOfTasksInputs={tasks} />
    </div>
  );
}

export default App;
