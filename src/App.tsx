import React from 'react';
import SpeedometerCard from './components/SpeedometerCard/SpeedometerCard';

import './App.css';
import './variables.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpeedometerCard
          value={85}
          headerTitle="App limits"
          title="You've almost reached your limit"
          description={
            <>
              You've used 80% of your available spots.<br/>
              Upgrade plan to create more projects.
            </>
          }
          width={365}
        />
      </header>
    </div>
  );
}

export default App;
