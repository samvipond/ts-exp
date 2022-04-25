import React from 'react';
import styled from 'styled-components';

import RetrieveUsers from './components/RetrieveUsers.js'
import AgeFilter from './components/AgeFilter'

const API_URL = 'http://localhost:8099'

const doSomething = () => {
  console.log('hello world');

}

function App() {
  return (
    <div className="App">
      <h1>Planned Test</h1>
      <RetrieveUsers url={API_URL} test={doSomething} />
      <AgeFilter />
    </div>
  );
}

export default App;
