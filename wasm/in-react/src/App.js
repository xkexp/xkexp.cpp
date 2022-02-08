import logo from './logo.svg';
import './App.css';
// 导入mjs
import { xkFunc } from './wasm/xkfunc.wasm';


function App() {

  console.log(xkFunc); // [Native Code]
  console.log(xkFunc());

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
        <p>{xkFunc()}</p>
      </header>
    </div>
  );
}

export default App;
