import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    return (
        <div id="crop">
            <div id="radar-container">
                <div id="titles">
                    <h2 className="H3">full-cycle</h2>
                    <h1 className="H1">Digital Marketing Agency</h1>
                </div>

                <div id="background">
                    <motion.img
                        animate={{ x: '1500%', y: '700%' }}
                        transition={{
                            ease: 'linear',
                            duration: 7,
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                        src={sound}
                        alt=""
                        id="sound"
                    />
                    <motion.img
                        animate={{ x: '1000%', y: '1200%' }}
                        transition={{
                            ease: 'linear',
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 0,
                            delay: 0.2,
                        }}
                        src={graph}
                        alt=""
                        id="graph"
                    />
                    <motion.img
                        animate={{ x: '1100%', y: '1200%' }}
                        transition={{
                            ease: 'linear',
                            duration: 10,
                            repeat: Infinity,
                            repeatDelay: 0,
                            delay: 0.4,
                        }}
                        src={facebook}
                        alt=""
                        id="facebook"
                    />
                    <motion.img
                        animate={{ x: '400%', y: '1200%' }}
                        transition={{
                            ease: 'linear',
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 0,
                            delay: 0.6,
                        }}
                        src={connection}
                        alt=""
                        id="connection"
                    />
                    <motion.img
                        animate={{ x: '-100%', y: '1200%' }}
                        transition={{
                            ease: 'linear',
                            duration: 8,
                            repeat: Infinity,
                            repeatDelay: 0,
                            delay: 0.8,
                        }}
                        src={messenger}
                        alt=""
                        id="messenger"
                    />
                    <motion.img
                        animate={{ x: '-500%', y: '1200%' }}
                        transition={{
                            ease: 'linear',
                            duration: 9,
                            repeat: Infinity,
                            repeatDelay: 0,
                            delay: 1,
                        }}
                        src={social}
                        alt=""
                        id="social"
                    />
                    <motion.img
                        animate={{ x: '-1100%', y: '1200%' }}
                        transition={{
                            ease: 'linear',
                            duration: 6,
                            repeat: Infinity,
                            repeatDelay: 0,
                            delay: 1.8,
                        }}
                        src={chain}
                        alt=""
                        id="chain"
                    />
                    <motion.img
                        animate={{ x: '-1300%', y: '1200%' }}
                        transition={{
                            ease: 'linear',
                            duration: 12,
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                        src={telegram}
                        alt=""
                        id="telegram"
                    />

                    <motion.img
                        animate={{ x: '-1400%', y: '500%' }}
                        transition={{
                            ease: 'linear',
                            duration: 11,
                            repeat: Infinity,
                            repeatDelay: 0,
                            delay: 2,
                        }}
                        src={stat}
                        alt=""
                        id="stat"
                    />
                </div>

                <div id="radar-parent">
                    <motion.div
                        id="radar"
                        animate={{
                            rotate: -270,
                            opacity: 0.3,
                        }}
                        transition={{
                            default: {
                                ease: 'linear',
                                repeat: Infinity,
                                duration: 8,
                                repeatDelay: 1,
                            },
                            opacity: {
                                ease: 'linear',
                                repeat: Infinity,
                                duration: 0.8,
                                repeatType: 'reverse',
                            },
                            background: {
                                repeat: Infinity,
                                duration: 5,
                                repeatType: 'reverse',
                            },
                        }}
                    ></motion.div>
                </div>
            </div>
        </div>
    );
};

export default Radar;
