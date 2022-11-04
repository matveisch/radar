import React from 'react'
import Radar from '../../components/radar/Radar'
import StatsInfo from '../../components/stats info/stats-info'
import './RadarPage.css'

const RadarPage = () => {
    return (
        <div id="radar-page">
            <Radar />
            <StatsInfo />
        </div>
    )
}

export default RadarPage
