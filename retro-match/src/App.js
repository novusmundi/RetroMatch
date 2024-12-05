// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <CardContainer />
            </main>
        </div>
    );
}

export default App;