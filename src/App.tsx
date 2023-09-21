
import logo from './logo.svg';
import './App.scss';
import * as React from 'react';
import QuoteMachine from './components/QuoteMachine/QuoteMachine';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <div id="quote-box">
          <QuoteMachine />
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
