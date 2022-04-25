import React from 'react';
import styled from 'styled-components';

import RetrieveUsers from './components/RetrieveUsers'

const API_URL = 'http://localhost:8099'

function App() {
  return (
    <div className="App">
      <h1>Planned Test</h1>
      <RetrieveUsers url={API_URL} />
      <div>
        min: <input name="minAge" value="0" type="number" />
        max: <input name="maxAge" value="100" type="number" />
        <button type="button">Filter by age</button>
      </div>
    </div>
  );
}

export default App;
