import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content';
import './styles/App.scss';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todos);

  return (
    <div className="App">
      <Header task={task} setTask={setTask} todos={todos} setTodos={setTodos} />
      <Content todos={todos} setTodos={setTodos}/>
      <Footer />
    </div>
  );
}

export default App;
