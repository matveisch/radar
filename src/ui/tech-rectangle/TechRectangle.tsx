import React from 'react';
import './TechRectangle.css';

interface Props {
    img: string;
    title: string;
}

const TechRectangle: React.FC<Props> = (props: Props) => {
    return (
        <div className="tech-rectangle">
            <div className="image-title">
                <img src={props.img} alt=""/>
                <h1 className="light-paragraph">{props.title}</h1>
            </div>
        </div>
    );
};

export default TechRectangle;