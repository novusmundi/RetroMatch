// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import SwipeButton from './components/SwipeButton';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <CardContainer />
            </main>
            <SwipeButton />
        </div>
    );
}

export default App;