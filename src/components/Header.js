import React, { useState } from 'react';
import moonIcon from '../assets/icon-moon.svg';
import sunIcon from '../assets/icon-sun.svg';
import { v4 as uuid} from 'uuid';

function Header({ task, setTask, todos, setTodos }) {

  const [darkTheme, setDarkTheme] = useState(false);
  
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const resetInput = () => {
    setTask("");
  }

  const handleInput = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([{id: uuid(), text: task, completed: false}, ...todos]);
    resetInput();
  }

  return (
    <div className={!darkTheme ? 'Header Header--light' : 'Header Header--dark'}>
        <div className='Header__wrapper'>
            <h1 className='Header__title'>Todo</h1>
            <button type="button" className='Header__btn' onClick={changeTheme}><img src={!darkTheme ? moonIcon : sunIcon} alt="" className='Header__btn__img'></img></button>
        </div>
        <form className='Header__input' onSubmit={handleSubmit}>
            <button type="submit" className='Header__input__btn'></button>
            <input type="text" placeholder='Create a new todo...' maxLength={55} value={task} onInput={handleInput} className='Header__input__text'></input>
        </form>
    </div>
  );
}

export default Header;
