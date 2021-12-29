import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import { Example } from './components/example';
import { Button } from './components/button';
import { List } from './components/list';

import { colors } from './tokens/colors';

import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
