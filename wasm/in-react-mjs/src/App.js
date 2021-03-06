import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// 导入mjs
import xkFuncModule from './xkfunc.mjs';

function App() {

  // 在useEffect中调用c函数
  useEffect(() => {
    xkFuncModule()
      .then(Module => {
        Module.ccall("xkFunc", null, null, null);
      })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
