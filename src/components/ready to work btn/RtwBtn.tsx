import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './RtwBtn.css'
import chain from '../../images/chain.svg'
import facebook from '../../images/facebook.svg'
import graph from '../../images/graph.svg'
import instagram from '../../images/instagram.svg'
import messenger from '../../images/messenger.svg'
import radar from '../../images/radar.svg'
import social from '../../images/social.svg'
import stat from '../../images/stat.svg'
import telegram from '../../images/telegram.svg'

const RtwBtn = () => {
    const [hovered, setHovered] = useState(false)

    function getRand(from: number, to: number) {
        let rand = 0
        // if(type==="x"){
        //     while(-220<rand && rand<220){
        //         rand = Math.floor(Math.random() * (to-from+1))+from
        //     }
        // }
        // else if(type==="y"){
        //     while(-80<rand && rand<80){
        //         rand = Math.floor(Math.random() * (to-from+1))+from
        //     }
        // }
        // else if(type==="rotate"){

        // }
        // console.log(rand + " " + type)
        return Math.floor(Math.random() * (to - from + 1)) + from
    }

    const iconsArr = [
        chain,
        facebook,
        graph,
        instagram,
        messenger,
        radar,
        social,
        stat,
        telegram,
    ]

    return (
        <div id="rtw-btn-background">
            <motion.div
                id="rtw-btn-container"
                animate={{
                    background: hovered
                        ? 'radial-gradient(25.8% 50% at 50% 50%, rgba(35, 41, 50, 0.8) 0%, rgba(105, 254, 139, 0) 100%)'
                        : 'radial-gradient(25.8% 50% at 50% 50%, rgba(105, 254, 139, 0.8) 0%, rgba(105, 254, 139, 0.8) 100%)',
                }}
                transition={{
                    background: {
                        duration: 0.7,
                    },
                }}
            >
                {iconsArr.map((item, index) => {
                    return (
                        <motion.img
                            initial={false}
                            animate={{
                                y: hovered ? 1 : 0,
                                x: hovered ? 1 : 0,
                                rotate: hovered ? getRand(-50, 50) : 0,
                            }}
                            transition={{
                                x: {
                                    type: hovered ? 'inertia' : 'just',
                                    velocity: getRand(-350, 350),
                                    power: 1,
                                },
                                y: {
                                    type: hovered ? 'inertia' : 'just',
                                    velocity: getRand(-90, 90),
                                    power: 2,
                                },
                                rotate: {
                                    type: hovered ? 'inertia' : 'just',
                                    velocity: getRand(-50, 50),
                                },
                            }}
                            src={item}
                            key={index}
                            alt={item}
                        />
                    )
                })}

                {/*
                <motion.img
                animate={{x: hovered ? getRund(-200, 200) : 0 , y: hovered ? getRund(-100, 100) : 0}} 
                
                src={chain} alt="" id="chain"/>
                <motion.img 
                animate={{x: hovered ? 0 : 0 , y: hovered ? -80 : 0}} 
                src={connection} alt="" id="connection"/>
                <motion.img 
                animate={{ x: hovered ? 250 : 0 , y: hovered ? -100 : 0}} 
                src={facebook} alt="" id="facebook"/>
                <motion.img 
                animate={{x: hovered ? 230 : 0 , y: hovered ? -10 : 0}} 
                 src={graph} alt="" id="graph"/>
                <motion.img 
                animate={{x: hovered ? -230 : 0 , y: hovered ? 10 : 0}} 
                src={instagram} alt="" id="instagram"/>
                <motion.img 
                animate={{x: hovered ? 30 : 0 , y: hovered ? 80 : 0}} 
                src={messenger} alt="" id="messenger"/>
                <motion.img 
                animate={{x: hovered ? -100 : 0 , y: hovered ? 100 : 0}} 
                src={radar} alt="" id="radar"/>
                <motion.img 
                animate={{x: hovered ? 140 : 0 , y: hovered ? 100 : 0}} 
                src={social} alt="" id="social"/>
                <motion.img 
                animate={{x: hovered ? -100 : 0 , y: hovered ? -80 : 0}} 
                src={sound} alt="" id="sound"/>
                <motion.img 
                animate={{x: hovered ? -250 : 0 , y: hovered ? -120 : 0}} 
                src={stat} alt="" id="stat"/>
                <motion.img 
                animate={{x: hovered ? -250 : 0 , y: hovered ? 120 : 0}} 
                src={telegram} alt="" id="telegram"/>
                */}
            </motion.div>
            <motion.button
                id="rtw-btn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="H3"
            >
                READY TO WORK?
            </motion.button>
        </div>
    )
}

export default RtwBtn
