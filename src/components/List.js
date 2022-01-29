import React from 'react';
import Task from './Task';

function List() {
  return (
      <div className='List'>
          <Task />
          <div className='List__wrapper'>
              <button type='button' className='List__btn'>5 items left</button>
              <button type='button' className='List__btn'>Clear Completed</button>
          </div>
      </div>
    );
}

export default List;
