import React from 'react';
import Task from "./Task"

const List = ({todos, dispatch, filter, setFilter, state}) => {

  const handleClear = () => {
    dispatch({type: "clear-completed"});
    setFilter(todos);
  }; 

  const renderState = () => {
      return state === true ? [...filter] : [...todos];
  }

  return (
      <div className='List'>
          {
              renderState().map( task => {
                  return (
                    <Task key={task.id} task={task} dispatch={dispatch}/>
                  );
              })
          }
          <div className='List__wrapper'>
              <button type='button' className='List__btn'>{todos.length} items left</button>
              <button type='button' className='List__btn' onClick={handleClear}>Clear Completed</button>
          </div>
      </div>
    );
};

export default List;
