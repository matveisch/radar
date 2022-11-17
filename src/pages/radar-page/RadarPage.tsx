import { motion, useScroll } from 'framer-motion';
import Radar from '../../components/radar/Radar';
import StatsInfo from '../../components/stats info/stats-info';
import './RadarPage.css';

const RadarPage = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div id="radar-page">
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Radar />
            <StatsInfo />
        </div>
    );
};

export default RadarPage;
