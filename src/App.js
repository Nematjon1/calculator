import React from 'react';
import './App.css';

import Calculator from "./components/Calculator.component"

function App(props) {
  return (
    <div className="app">
      <h1 className="app__header">Calculator App</h1>
      <Calculator />
    </div>
  );
}

export default App;
