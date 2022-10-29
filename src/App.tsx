import React from 'react';
import './styles/App.css';
import Radar from "./components/radar/Radar";
import ServiceCard from './components/service card/Service-Card';
import StatsInfo from './components/stats info/stats-info';
import RtwBtn from './components/ready to work btn/rtw-btn';

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
            <Radar />
            <ServiceCard title="Telegram" description={["Таргетная реклама", "Создание постов", "Интеграции"]}/>
            <StatsInfo />
            
            <RtwBtn />
            
        </div>
    );
}

export default App;
