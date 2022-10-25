import React from 'react';
import './styles/App.css';
import Radar from "./components/radar/Radar";
import ServiceCard from './components/service card/Service-Card';
import Navbar from "./components/navbar/Navbar";
import TechRectangle from "./ui/tech-rectangle/TechRectangle";
import image from './images/Group 36.svg';

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Radar />
            <ServiceCard title="Telegram" description={["Таргетная реклама", "Создание постов", "Интеграции"]}/>
            <TechRectangle img={image} title={'Trend Research'} />
        </div>
    );
}

export default App;
