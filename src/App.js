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
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], storedTodos);
  const [task, setTask] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [renderize, setRenderize] = useState(todos);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
    setRenderize(todos)
  }, [todos]);

  function storedTodos() {
    const localData = localStorage.getItem("todo-list");
    if(localData) {
      return JSON.parse(localData);
    } else {
      return [];
    }
  };

  return (
    <TodoContext.Provider
      value={{ darkTheme, setDarkTheme, todos, dispatch, task, setTask, renderize, setRenderize }}
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
