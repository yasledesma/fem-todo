import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Filter = () => {
  const { todos, setRenderize } = useContext(TodoContext);

  const handleFilter = (e) => {
    if (e.target.innerHTML === "All") {
      setRenderize(todos);
    }

    if (e.target.innerHTML === "Active") {
      setRenderize(
        [...todos].filter((todo) => {
          if (todo.completed === false) {
            return todo;
          }
        })
      );
    }

    if (e.target.innerHTML === "Completed") {
      setRenderize(
        [...todos].filter((todo) => {
          if (todo.completed === true) {
            return todo;
          }
        })
      );
    }
  };

  return (
    <div className="Filter">
      <button type="button" className="Filter__btn" onClick={handleFilter}>
        All
      </button>
      <button type="button" className="Filter__btn" onClick={handleFilter}>
        Active
      </button>
      <button type="button" className="Filter__btn" onClick={handleFilter}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
