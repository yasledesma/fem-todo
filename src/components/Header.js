import React, { useState } from 'react';
import moonIcon from '../assets/icon-moon.svg';
import sunIcon from '../assets/icon-sun.svg';

const Header = ({task, setTask, dispatch}) => {

  const [darkTheme, setDarkTheme] = useState(false);
  
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const handleInput = (e) => {
    return setTask(`${e.target.value}`);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "add-task", payload: {task}});
    setTask("");
  }
  

  return (
    <div className={!darkTheme ? 'Header Header--light' : 'Header Header--dark'}>
        <div className='Header__wrapper'>
            <h1 className='Header__title'>Todo</h1>
            <button type="button" className='Header__btn' onClick={changeTheme}><img src={!darkTheme ? moonIcon : sunIcon} alt="" className='Header__btn__img'></img></button>
        </div>
        <form className='Header__input' onSubmit={handleSubmit}>
            <button type="submit" className='Header__input__btn'></button>
            <input type="text" placeholder='Create a new todo...' value={task} className='Header__input__text' onChange={handleInput}></input>
        </form>
    </div>
  );
};

export default Header;
