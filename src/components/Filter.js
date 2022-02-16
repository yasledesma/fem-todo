import React from 'react';

const Filter = ({todos, setFilter, setState}) => {
  const handleFilter = (e) => {
    if(e.target.innerHTML === "All") {
      setState(false);
    } 
    
    if(e.target.innerHTML === "Active") {
      setFilter([...todos].filter( todo => {
        if(todo.completed === false) {
        return todo;
        }
      }))
      setState(true);
    } 

    if(e.target.innerHTML === "Completed") {
      setFilter([...todos].filter( todo => {
        if(todo.completed === true) {
        return todo;
        }
      }))
      setState(true);
    }

  }

  return (
      <div className='Filter'>
          <button type="button" className='Filter__btn' onClick={handleFilter}>All</button>
          <button type="button" className='Filter__btn' onClick={handleFilter}>Active</button>
          <button type="button" className='Filter__btn' onClick={handleFilter}>Completed</button>
      </div>
    );
};

export default Filter;
