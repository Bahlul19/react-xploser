import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Calculation from './components/Calculation';
import Learning from './components/ClassComponent';
import Testing from './components/Testing';
import TestingStateComponent from './components/TestingStateComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello/>
        <Calculation/> */}
        {/* <Testing name ="aa"/>
        <Testing name ="Nokia"/>
        <Testing name ="Samsung"/>
        <Testing name ="Huwai"/>
        <Testing name ="Xiomi"/> */}
        <TestingStateComponent/>
      </header>
    </div>
  );
}

export default App;
