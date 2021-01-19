import logo from './logo.svg';
import './App.css';
function Test(props){
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edi  <code>src/App.js</code> and save to reload.
        </p>
        <Test name="Benjamin" />
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
