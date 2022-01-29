import React from 'react';
import moonIcon from '../assets/icon-moon.svg';
import sunIcon from '../assets/icon-sun.svg';

function Header() {
  return (
    <div className='Header'>
        <div className='Header__wrapper'>
            <h1 className='Header__title'>Todo</h1>
            <button type="button" className='Header__btn'><img src={moonIcon} alt="" className='Header__btn__img'></img></button>
        </div>
        <div className='Header__input'>
            <input type="radio" className='Header__input__radio'></input>
            <input type="text" placeholder='Create a new todo...' className='Header__input__text'></input>
        </div>
    </div>
  );
}

export default Header;
