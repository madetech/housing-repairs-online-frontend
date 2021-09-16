import logo from './logo.svg';
import './App.css';
import { MultiChoice, Radio } from 'govuk-react';

function App() {
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
        <MultiChoice label="example">
          <Radio name="group1" inline>
            Yes
          </Radio>
          <Radio name="group1" inline>
            No
          </Radio>
        </MultiChoice>
      </header>
    </div>
  );
}

export default App;
