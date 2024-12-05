// src/App.js
import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RetroMatch</h1>
      </header>
      <main>
        <CardContainer />
      </main>
    </div>
  );
}

export default App;