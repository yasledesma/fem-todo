import React from 'react';
import usePrevious from '../hooks/usePrevious'

function Filter( { todos, setTodos } ) {

  const prevTodos = usePrevious(todos)
  console.log("next is prevtodos");
  console.log(prevTodos);

  const filterAll = () => {
   
  };

  const filterActive = () => {
    
  };

  const filterCompleted = () => {

  };

  return (
      <div className='Filter'>
          <button type="button" className='Filter__btn' onLoad={filterAll}>All</button>
          <button type="button" className='Filter__btn' onClick={filterActive}>Active</button>
          <button type="button" className='Filter__btn' onClick={filterCompleted}>Completed</button>
      </div>
    );
}

export default Filter;
