import React from 'react'
import TechRectangle from '../../ui/tech-rectangle/TechRectangle'

import chain from '../../images/chain.svg'
import './StaffCarousel.css'

interface Props {
    animation: string
}

const StaffCarousel: React.FC<Props> = (props: Props) => {
    let anim = props.animation + ' linear infinite'
    console.log(anim)
    const animStyle = {
        animation: anim,
    }

    return (
        <div id="carousel-main-div">
            <div style={animStyle} id="carousel-div">
                <div className="carousel-grid">
                    <div className="carousel-img">
                        <TechRectangle img={chain} title="helo" />
                    </div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1623162905251-e98a25a45a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
                        }}
                        className="carousel-img"
                    >
                        2
                    </div>
                    <div className="carousel-img">3</div>
                    <div className="carousel-img">4</div>
                    <div className="carousel-img">5</div>
                    <div className="carousel-img">6</div>
                </div>
            </div>
            <div style={animStyle} id="carousel-div">
                <div className="carousel-grid">
                    <div className="carousel-img">
                        {' '}
                        <TechRectangle img={chain} title="helo" />
                    </div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1623162905251-e98a25a45a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
                        }}
                        className="carousel-img"
                    >
                        22
                    </div>
                    <div className="carousel-img">33</div>
                    <div className="carousel-img">44</div>
                    <div className="carousel-img">55</div>
                    <div className="carousel-img">66</div>
                </div>
            </div>
        </div>
    )
}
export default StaffCarousel
