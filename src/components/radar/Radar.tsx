import React, {useEffect} from 'react';
import { motion , useAnimation} from "framer-motion"
import './Radar.css';
import chain from '../../images/chain.svg';
import connection from '../../images/connection.svg';
import facebook from '../../images/facebook.svg';
import graph from '../../images/graph.svg';
import instagram from '../../images/instagram.svg';
import messenger from '../../images/messenger.svg';
import radar from '../../images/radar.svg';
import social from '../../images/social.svg';
import sound from '../../images/sound.svg';
import stat from '../../images/stat.svg';
import telegram from '../../images/telegram.svg';

const Radar = () => {

    const iconsArr = [chain, facebook, graph, instagram, messenger, radar, social, stat, telegram, sound, connection];

    return (
        <div id="crop">
            <div id="radar-container">
                <div id="titles">
                    <h2 className="H3">full-cycle</h2>
                    <h1 className="H1">Digital Marketing Agency</h1>
                </div>
                <div id="background">
                    {
                    iconsArr.map((item)=>{
                    return(<motion.img
                    animate={{x: Math.floor(Math.random() * (1100))-550 , y: Math.floor(Math.random() * (-700)-70)}} 
                    transition={{
                        ease:"linear",
                        duration: 2.5,
                     repeat: Infinity, 
                     repeatDelay: 2.5
                    }}
                    src={item} alt="" id={item}/>)
                })
            }
                    {/* <img src={chain} alt="" id="chain"/>
                    <img src={connection} alt="" id="connection"/>
                    <img src={facebook} alt="" id="facebook"/>
                    <img src={graph} alt="" id="graph"/>
                    <img src={instagram} alt="" id="instagram"/>
                    <img src={messenger} alt="" id="messenger"/>
                    <img src={radar} alt="" id="radar"/>
                    <img src={social} alt="" id="social"/>
                    <img src={sound} alt="" id="sound"/>
                    <img src={stat} alt="" id="stat"/>
                    <img src={telegram} alt="" id="telegram"/> */}
                </div>
                <div id="radar-parent">
                    <motion.div id="radar"
                    animate={{rotate:-360}}
                    transition={{ ease:'linear',repeat: Infinity, duration: 5}}>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Radar;