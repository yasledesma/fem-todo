import React from 'react';
import crossIcon from '../assets/icon-cross.svg';

const Task = ({todo, dispatch}) => {
  const handleToggleCompleted = () => {
    dispatch({type: "toggle-complete-task", payload: {id: todo.id}});
  };

  const handleRemove = () => {
    dispatch({type: "remove-task", payload: {id: todo.id}});
  };

  return (
    <div className='Task'>
        <input type="checkbox" className='Task__checkbox' onChange={handleToggleCompleted}></input>
        <p className={todo.completed === false ?'Task__text Task__text--uncompleted' : 'Task__text Task__text--completed'}>{todo.text}</p>
        <button type='button' className='Task__btn' onClick={handleRemove}><img src={crossIcon} alt="" className='Task__btn__img'></img></button>
    </div>
  );
};

export default Task;
