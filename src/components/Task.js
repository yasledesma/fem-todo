import React from 'react';
import crossIcon from '../assets/icon-cross.svg';

const Task = ({todo}) => {
  return (
    <div className='Task'>
        <input type="checkbox" className='Task__radio'></input>
        <p className='Task__text'>{todo.text}</p>
        <button type='button' className='Task__btn'><img src={crossIcon} alt="" className='Task__btn__img'></img></button>
    </div>
  );
}

export default Task;
