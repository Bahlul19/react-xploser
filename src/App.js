import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

import Calculation from './components/Calculation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <Calculation/>
      </header>
    </div>
  );
}

export default App;
