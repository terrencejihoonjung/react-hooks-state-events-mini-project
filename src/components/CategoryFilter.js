import React from "react";

function CategoryFilter({ categories, category, setCategory }) { 

  const renderButtons = categories.map(currentCategory => {

    const className = category === currentCategory ? "selected" : null;

    return (
      <button 
        key={currentCategory}
        className={className}
        onClick={() => setCategory(currentCategory)}
      >
        {currentCategory}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
