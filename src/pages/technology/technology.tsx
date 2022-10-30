import React, {useEffect} from 'react';

import './technology.css'

import TechRectangle from '../../ui/tech-rectangle/TechRectangle';
import radarTechGif from '../../images/Radar-tech.gif'
import trandResearch from '../../images/Group 36.svg'
import marketTracking from '../../images/Group 34.svg'
import bots from '../../images/Group 39.svg'
import automaticServices from '../../images/Group 37.svg'


const Technology = () => {
    return(
        <div id="main-container">
            <div id="flex">
            <div id="left-container">
                <h2 id="tech-title" className="H2">Technology</h2>
                <p id="tech-paragraph" className="paragraph">Мы используем множество автоматизированных сервисов и собственных ботов которые позволяют отслеживать рынок.</p>
                <div id="tech-cards-wrapper">
                    <div className="tech-card"><TechRectangle  img={marketTracking} title={'Market Tracking'}/></div>
                    <div className="tech-card"><TechRectangle img={trandResearch} title={'Trand Research'}/></div>
                    <div className="tech-card"><TechRectangle img={bots} title={'Bots'}/></div>
                    <div className="tech-card"><TechRectangle img={automaticServices} title={'Automatic Services'}/></div>
                    
                    
                    
                    
                </div>
            </div>
            <div id="right-container">
                <img id="tech-radar-gif" src={radarTechGif} alt="Tech radar animation"/>
            </div>
            </div>
        </div>
    )
}
export default Technology;