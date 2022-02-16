import React from 'react';
import crossIcon from '../assets/icon-cross.svg';

const Task = ({task, dispatch}) => {
  const handleToggleCompleted = () => {
    dispatch({type: "toggle-complete-task", payload: {id: task.id}});
  };

  const handleRemove = () => {
    dispatch({type: "remove-task", payload: {id: task.id}});
  };

  return (
    <div className='Task'>
        <input type="checkbox" className='Task__checkbox' onChange={handleToggleCompleted}></input>
        <p className={task.completed === false ? 'Task__text Task__text--uncompleted' : 'Task__text Task__text--completed'}>{task.text}</p>
        <button type='button' className='Task__btn' onClick={handleRemove}><img src={crossIcon} alt="" className='Task__btn__img'></img></button>
    </div>
  );
};

export default Task;
