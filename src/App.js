import React, { useReducer, useState, useEffect } from "react";
import { TodoContext } from "./components/TodoContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { v4 as uuid } from "uuid";
import "./styles/App.scss";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [
        ...todos,
        { id: uuid(), text: action.payload.task, completed: false },
      ];
    case ACTIONS.REMOVE_TASK:
      return todos.filter((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
      });
    case ACTIONS.TOGGLE_COMPLETE_TASK:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case ACTIONS.CLEAR_COMPLETED:
      return todos.filter((todo) => {
        if (todo.completed === false) {
          return todo;
        }
      });
    default:
      return todos;
  }
};

const ACTIONS = {
  ADD_TASK: "add-task",
  REMOVE_TASK: "remove-task",
  TOGGLE_COMPLETE_TASK: "toggle-complete-task",
  CLEAR_COMPLETED: "clear-completed",
  FILTER_ALL: "filter-all",
  FILTER_ACTIVE: "filter-active",
  FILTER_COMPLETED: "filter-completed",
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [filter, setFilter] = useState([]);
  const [state, setState] = useState(false);

  return (
    <TodoContext.Provider
      value={{ darkTheme, setDarkTheme, todos, dispatch, task, setTask, filter, setFilter, state, setState }}
    >
      <div className={!darkTheme ? "App light-theme" : "App dark-theme"}>
        <Header />
        <Content />
        <Footer />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
