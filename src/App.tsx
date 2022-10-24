import React from 'react';
import './styles/App.css';
import Radar from "./components/radar/Radar";
import ServiceCard from './components/service card/Service-Card';

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
            <Radar />
            <ServiceCard title="Telegram" description={["Таргетная реклама", "Создание постов", "Интеграции"]}/>
        </div>
    );
}

export default App;
