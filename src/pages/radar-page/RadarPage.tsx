import React from 'react'

import { motion, useScroll } from 'framer-motion'

import Radar from '../../components/radar/Radar'
import StatsInfo from '../../components/stats info/stats-info'
import Services from '../services section/ServicesSection'
import Technology from '../technology/technology'
import RtwBtn from '../../components/ready to work btn/RtwBtn'

import './RadarPage.css'

const RadarPage = () => {
    const { scrollYProgress } = useScroll()
    return (
        <div id="radar-page">
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Radar />
            <StatsInfo />
            <Services />
            <Technology />
            <RtwBtn />
        </div>
    )
}

export default RadarPage
