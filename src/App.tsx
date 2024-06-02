import React from 'react';
import SpeedometerCard from './components/SpeedometerCard/SpeedometerCard';

import './App.css';
import './variables.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpeedometerCard value={85} />
      </header>
    </div>
  );
}

export default App;
