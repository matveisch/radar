import React from 'react';
import StaffCarousel from '../../components/staff-carousel/StaffCarousel';
import TechRectangle from '../../ui/tech-rectangle/TechRectangle';
import creatives from '../../images/colored-creative.svg';
import development from '../../images/colored-developent.svg';
import copyrighting from '../../images/colored-copyrighting.svg';
import './CarouselPage.css';
import Carousel from '../../components/carousel/Carousel';
import CarouselImg from '../../ui/carousel-img/CarouselImg';

export default function CarouselPage() {
    const arrayOfBlocks = [
        <TechRectangle img={development} title="Development" />,
        <CarouselImg image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />,
        <TechRectangle img={copyrighting} title="Copyrighting" />,
        <p className="paragraph">
            Мы устраиваем вот такие штуки и вот такие штуки и можем проводить
            эфиры вообще без проблем хотете? И рекламу в телик БАМ
        </p>,
        <TechRectangle img={creatives} title="Creatives" />,
        <CarouselImg image="https://images.unsplash.com/photo-1524124689028-f924049fe2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />,
    ];

    return (
        <div id="carousel-page">
            <Carousel
                arrayOfBlocks={arrayOfBlocks}
                reversed={false}
                speed="50s"
            />
            <Carousel
                arrayOfBlocks={arrayOfBlocks}
                reversed={true}
                speed="30s"
            />
            <Carousel
                arrayOfBlocks={arrayOfBlocks}
                reversed={false}
                speed="20s"
            />
            {/* <StaffCarousel
                reversed={false}
                speed="50s"
                childComp={
                    <div className="carousel-grid">
                        <div className="carousel-item">
                            <TechRectangle
                                img={development}
                                title="Development"
                            />
                        </div>
                        <div
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
                            }}
                            className="carousel-item"
                        ></div>
                        <div className="carousel-item">
                            <TechRectangle
                                img={copyrighting}
                                title="Copyrighting"
                            />
                        </div>
                        <div className="carousel-item">
                            <p className="paragraph">
                                Мы устраиваем вот такие штуки и вот такие штуки
                                и можем проводить эфиры вообще без проблем
                                хотете? И рекламу в телик БАМ
                            </p>
                        </div>
                        <div className="carousel-item">
                            {' '}
                            <TechRectangle img={creatives} title="Creatives" />
                        </div>
                        <div
                            className="carousel-item"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1524124689028-f924049fe2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
                            }}
                        ></div>
                    </div>
                }
            />
            <StaffCarousel
                reversed={true}
                speed="30s"
                childComp={
                    <div className="carousel-grid">
                        <div className="carousel-item">
                            <p className="paragraph">
                                А здесь длинный текст который описывает работу
                                прекрасной команды над шикарным проектом
                            </p>
                        </div>
                        <div className="carousel-item">
                            <TechRectangle
                                img={copyrighting}
                                title="Copyrighting"
                            />
                        </div>
                        <div
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1622988766425-8ecbae9cef6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                            }}
                            className="carousel-item"
                        ></div>
                        <div className="carousel-item">
                            <p className="paragraph">
                                А здесь длинный текст который описывает работу
                                прекрасной команды над шикарным проектом
                            </p>
                        </div>
                        <div className="carousel-item">
                            <TechRectangle img={creatives} title="Creatives" />
                        </div>
                        <div
                            className="carousel-item"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                            }}
                        ></div>
                    </div>
                }
            />
            <StaffCarousel
                reversed={false}
                speed="20s"
                childComp={
                    <div className="carousel-grid">
                        <div className="carousel-item">
                            <TechRectangle
                                img={development}
                                title="Development"
                            />
                        </div>
                        <div
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1623162905251-e98a25a45a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
                            }}
                            className="carousel-item"
                        ></div>
                        <div className="carousel-item">
                            <TechRectangle
                                img={copyrighting}
                                title="Copyrighting"
                            />
                        </div>
                        <div className="carousel-item">
                            <p className="paragraph">
                                Мы устраиваем вот такие штуки и вот такие штуки
                                и можем проводить эфиры вообще без проблем
                                хотете? И рекламу в телик БАМ
                            </p>
                        </div>
                        <div className="carousel-item">
                            <TechRectangle img={creatives} title="Creatives" />
                        </div>
                        <div
                            className="carousel-item"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
                            }}
                        ></div>
                    </div>
                }
            /> */}
        </div>
    );
}
