import React from 'react';
import './styles/App.css';
import Radar from "./components/radar/Radar";
import ServiceCard from './components/service card/Service-Card';

import StatsInfo from './components/stats info/stats-info';
import RtwBtn from './components/ready to work btn/rtw-btn';

import Navbar from "./components/navbar/Navbar";
import TechRectangle from "./ui/tech-rectangle/TechRectangle";
import image from './images/Group 36.svg';
import Technology from './pages/technology/technology';
import Services from './pages/services/services';

function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Radar />
            <StatsInfo />
            <Services />
            <Technology />
             <RtwBtn />

        </div>
    );
}

export default App;
