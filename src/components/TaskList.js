import React from "react";
import Task from "./Task.js";

function TaskList({ tasks, removeTask }) {

  const renderAllTasks = tasks.map(task => {
    return <Task key={task.text} {...task} removeTask={removeTask} />
  })

  return (
    <div className="tasks">
      {renderAllTasks}
    </div>
  );
}

export default TaskList;
