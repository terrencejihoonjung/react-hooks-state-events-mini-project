import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("");

  const renderOptions = categories.map(category => {
    return (
      <option key={category}>
        {category}
      </option>
    )
  })

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category});
    setCategory("Code");
    setText("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
