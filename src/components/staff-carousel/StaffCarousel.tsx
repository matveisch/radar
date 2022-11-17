import React, { useState, useEffect, useRef } from 'react';
import './StaffCarousel.css';

interface Props {
    reversed: boolean;
    speed?: string;
    childComp?: React.ReactNode;
}

const StaffCarousel: React.FC<Props> = (props: Props) => {
    let reversed = props.reversed ? 'gridLoopReverse' : 'gridLoop';
    let anim = reversed + ' ' + props.speed + ' linear infinite';

    const carouselRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);

    const [animationStyle, setAnimationStyle] = useState({
        animation: anim,
        animationPlayState: 'running',
    });
    const [isReversed, setIsReversed] = useState(props.reversed);

    useEffect(() => {
        //   reversed = isReversed ? 'gridLoopReverse' : 'gridLoop';
        // anim = reversed + ' ' + props.speed + ' linear infinite';
        // console.log(carouselRef);
        setAnimationStyle({
            animation: anim,
            animationPlayState: isHovered ? 'paused' : 'running',
        });
    }, [isHovered]);
    return (
        <div
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
            id="carousel-main-div"
        >
            <div
                ref={carouselRef}
                style={animationStyle}
                className="carousel-div"
            >
                {props.childComp}
            </div>
            <div style={animationStyle} className="carousel-div">
                {props.childComp}
            </div>
        </div>
    );
};
export default StaffCarousel;
