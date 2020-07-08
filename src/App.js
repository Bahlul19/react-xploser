import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Calculation from './components/Calculation';
import Learning from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <Calculation/>
        <Learning/>
      </header>
    </div>
  );
}

export default App;
