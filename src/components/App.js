import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState(["All"]);

  function removeTask(taskToRemoveText) {
    const newTasks = tasks.filter(task => task.text !== taskToRemoveText)
    setTasks(newTasks);
  }

  function addTask( newTask ) { 
    setTasks(currentTasks => [...currentTasks, newTask])
  }

  const filteredTasks = tasks.filter(task => category === "All" ? true : category === task.category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category} setCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={addTask} />
      <TaskList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
