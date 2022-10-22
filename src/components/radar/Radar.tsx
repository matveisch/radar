import React from 'react';
import './Radar.css';
import at from '../../images/at.png';
import chain from '../../images/chain.png';
import connection from '../../images/connection.png';
import facebook from '../../images/facebook.png';
import graph from '../../images/graph.png';
import instagram from '../../images/instagram.png';
import messenger from '../../images/messenger.png';
import radar from '../../images/radar.png';
import social from '../../images/social.png';
import sound from '../../images/sound.png';
import stat from '../../images/stat.png';
import telegram from '../../images/telegram.png';

const Radar = () => {
    return (
        <div id="crop">
            <div id="radar-container">
                <div id="titles">
                    <h2 className="H3">full-cycle</h2>
                    <h1 className="H1">Digital Marketing Agency</h1>
                </div>
                <div id="background">
                    <img src={at} alt="" id="at"/>
                    <img src={chain} alt="" id="chain"/>
                    <img src={connection} alt="" id="connection"/>
                    <img src={facebook} alt="" id="facebook"/>
                    <img src={graph} alt="" id="graph"/>
                    <img src={instagram} alt="" id="instagram"/>
                    <img src={messenger} alt="" id="messenger"/>
                    <img src={radar} alt="" id="radar"/>
                    <img src={social} alt="" id="social"/>
                    <img src={sound} alt="" id="sound"/>
                    <img src={stat} alt="" id="stat"/>
                    <img src={telegram} alt="" id="telegram"/>
                </div>
                <div id="radar-parent">
                    <div id="radar">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Radar;