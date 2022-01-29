import React from 'react';

function Filter() {
  return (
      <div className='Filter'>
          <button type="button" className='Filter__btn'>All</button>
          <button type="button" className='Filter__btn'>Active</button>
          <button type="button" className='Filter__btn'>Completed</button>
      </div>
    );
}

export default Filter;
