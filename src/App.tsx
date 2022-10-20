import React from 'react';
import './styles/App.css';
import Radar from "./components/radar/Radar";

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
            <Radar />
        </div>
    );
}

export default App;
