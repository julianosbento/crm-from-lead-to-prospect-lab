import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import { Example } from './components/example';
import { Button } from './components/button';

import { colors } from './tokens/colors';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Example />
          <Button color={colors.success} text="Test" onClick={() => console.log('Clicked!!')} />
          <img src={logo} className="App-logo" alt="logo" />
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
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
