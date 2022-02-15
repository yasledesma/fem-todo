import React from 'react';
import Task from "./Task"
import crossIcon from '../assets/icon-cross.svg';

const List = ({todos, dispatch}) => {

  const handleClear = () => {
    dispatch({type: "clear-completed"});
  }; 

  return (
      <div className='List'>
          {
              todos.map( todo => {
                  return (
                    <Task key={todo.id} todo={todo} dispatch={dispatch}/>
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
