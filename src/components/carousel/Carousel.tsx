import './carousel.css';
import { useEffect, useState } from 'react';

type Props = {
    arrayOfBlocks: JSX.Element[];
    reversed: boolean;
    speed?: string;
};

export default function Carousel({ arrayOfBlocks, reversed, speed }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    let isReversed = reversed ? 'scrollReverse' : 'scroll';
    let anim = `${isReversed} ${speed} linear infinite`;
    const [animationStyle, setAnimationStyle] = useState({
        animation: anim,
        animationPlayState: 'running',
    });

    useEffect(() => {
        setAnimationStyle({
            animation: anim,
            animationPlayState: isHovered ? 'paused' : 'running',
        });
    }, [isHovered]);

    return (
        <div
            className="slider"
            onTouchStart={() => {
                //   setIsReversed(!isReversed);
                setIsHovered(!isHovered);
            }}
            onTouchEnd={() => {
                setIsHovered(!isHovered);
            }}
            onMouseEnter={() => {
                //  setIsReversed(!isReversed);
                setIsHovered(!isHovered);
            }}
            onMouseLeave={() => {
                setIsHovered(!isHovered);
            }}
        >
            <div className="slide-track" style={animationStyle}>
                {arrayOfBlocks.map((item, index) => {
                    return (
                        <div key={index} className="carousel-item">
                            {item}
                        </div>
                    );
                })}
                {arrayOfBlocks.map((item, index) => {
                    return (
                        <div key={index} className="carousel-item">
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
