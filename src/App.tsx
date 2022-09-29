import React from 'react';
import './App.css';
import Radar from "./radar/Radar";

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
            <Radar />
        </div>
    );
}

export default App;
