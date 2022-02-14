import React from 'react';
import crossIcon from '../assets/icon-cross.svg';

function List( { todos, setTodos } ) {

    const handleCompleted = ({id}) => {
        setTodos(
            todos.map( 
                todo => todo.id === id ? {  ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = ({id}) => {
        setTodos(
            todos.filter(
                todo => todo.id !== id
            )
        );
    };

    const clearCompleted = () => {
        setTodos(
            todos.filter(
                todo => todo.completed !== true
            )
        )
    };

  return (
      <div className='List'>
          {
              todos.map( todo => {
                  return (
                    <form key={todo.id} className='Task'>
                        <input type="checkbox" className='Task__checkbox' onChange={() => handleCompleted(todo)}></input>
                        <p className={todo.completed ? 'Task__text--completed' : 'Task__text--uncompleted'}>{todo.text}</p>
                        <button type='button' className='Task__btn' onClick={() => handleDelete(todo)}><img src={crossIcon} alt="" className='Task__btn__img'></img></button>
                    </form>
                  );
              })
          }
          <div className='List__wrapper'>
              <button type='button' className='List__btn'>{todos.length} items left</button>
              <button type='button' className='List__btn' onClick={clearCompleted}>Clear Completed</button>
          </div>
      </div>
    );
}

export default List;
