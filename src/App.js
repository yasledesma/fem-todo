import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
