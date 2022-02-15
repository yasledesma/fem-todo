import React, { useReducer, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content';
import { v4 as uuid} from 'uuid';
import './styles/App.scss';

const reducer = (todos, action) => {
  switch(action.type) {
    case ACTIONS.ADD_TASK:
     return [...todos, {id: uuid(), text: action.payload.task, completed: false}];
    case ACTIONS.REMOVE_TASK:
      return todos.filter( todo => {
        if(todo.id !== action.payload.id) {
          return todo;
        } 
      });
    case ACTIONS.TOGGLE_COMPLETE_TASK:
      return todos.map( todo => {
        if(todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })
    case ACTIONS.CLEAR_COMPLETED:
      return todos.filter( todo => {
        if(todo.completed === false) {
          return todo;
        }
      });
    default:
      return todos;
  }
};

const ACTIONS = {
  SET_INPUT: "set-input",
  ADD_TASK: "add-task",
  REMOVE_TASK: "remove-task",
  TOGGLE_COMPLETE_TASK: "toggle-complete-task",
  CLEAR_COMPLETED: "clear-completed",
  // FILTER_ALL: "filter-all",
  // FILTER_ACTIVE: "filter-active",
  // FILTER_COMPLETED: "filter-completed"
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  console.log(todos)

  return (
    <div className="App">
      <Header task={task} setTask={setTask} dispatch={dispatch}/>
      <Content todos={todos} dispatch={dispatch}/>
      <Footer />
    </div>
  );
};

export default App;
