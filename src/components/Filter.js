import React, {useReducer} from 'react';

// const filterReducer = (filter, action) => {
//   switch(action.type) {
//     case ACTIONS.FILTER_ALL:
//       return filter;
//     case ACTIONS.FILTER_ACTIVE:
//       return filter.filter( todo => {
//         if(todo.completed === false) {
//           return todo;
//         }
//       });
//     case ACTIONS.FILTER_COMPLETED:
//       return filter.filter( todo => {
//         if(todo.completed === true) {
//           return todo;
//         }
//       });
//     default:
//       return filter;
//   }
// }

// const ACTIONS = {
//   FILTER_ALL: "filter-all",
//   FILTER_ACTIVE: "filter-active",
//   FILTER_COMPLETED: "filter-completed"
// };

const Filter = () => {

  const handleFilter = (e) => {
    if(e.target.innerHTML === "All") {

    } 
    
    if(e.target.innerHTML === "Active") {

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
