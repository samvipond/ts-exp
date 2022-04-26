import React from 'react';
import styled from 'styled-components';

import RetrieveUsers from './components/RetrieveUsers.js'
import Main from './components/Main.js'

const API_URL = 'http://localhost:8099'

const doSomething = () => {
  console.log('hello world');

}

function App() {
  return <Main />;
}

export default App;
