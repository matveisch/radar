import React from 'react';

type Props = {
    image: string;
};

function CarouselImg({ image }: Props) {
    return (
        <div
            style={{
                backgroundImage: `url('${image}')`,
            }}
            className="carousel-item"
        ></div>
    );
}

export default CarouselImg;
