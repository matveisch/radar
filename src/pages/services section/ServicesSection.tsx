import React from 'react'
import './servicesSection.css'
import ServiceCard from '../../components/service card/ServiceCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const Services = () => {
    return (
        <div id="main-wrapper-services-section">
            <h2 id="services-title" className="H2">
                Our Services
            </h2>
            <div id="services-wrapper" className="paragraph">
                <p className="services-paragraph-smaller">
                    Наша команда консультирует по поводу рекламной компании в
                    интернете, создание концептов рекламных компаний и
                    интеграцию в места размещения.
                </p>
                <div className="service-cards-container">
                    <p className="services-paragraph-bigger">
                        Наша команда консультирует по поводу рекламной компании
                        в интернете, создание концептов рекламных компаний и
                        интеграцию в места размещения.
                    </p>
                    <ServiceCard
                        id={0}
                        title="Social"
                        imageURL="telegram-circle"
                        description={[
                            'Таргетная реклама',
                            'Создание постов',
                            'Интеграции',
                            'Таргетная реклама',
                            'Создание постов',
                        ]}
                    />
                    <ServiceCard
                        id={1}
                        title="Web"
                        imageURL="Web"
                        description={[
                            'Контекстная реклама',
                            'Офферная реклама',
                            'CEO',
                            'Программатик баинг',
                            'Медийная реклама',
                        ]}
                    />
                    <ServiceCard
                        id={2}
                        title="Television"
                        imageURL="Television"
                        description={[
                            'Точечное размещение',
                            'Размещение прямой рекламы',
                            'Реклама в спортивных трансляциях',
                            'Спонсорство программ',
                            'Видео продакшн',
                        ]}
                    />
                    <ServiceCard
                        id={3}
                        title="Radio"
                        imageURL="Radio"
                        description={[
                            'Сетевое размещение',
                            'Точечное размещение',
                            'Прямая радиореклама',
                            'Интеграция в эфир',
                            'Интернет радио',
                            'Аудио продакшн',
                        ]}
                    />
                    <ServiceCard
                        id={4}
                        title="Creatives"
                        imageURL="Creative"
                        description={[
                            'Концепция рекламных компаний',
                            'Копирайтинг',
                            'Разработка СТМ',
                            'Продакшн фото, видео и аудио',
                        ]}
                    />
                    <ServiceCard
                        id={5}
                        title="3D Visuals"
                        imageURL="3d-box"
                        description={[
                            'Создание концепции роликов',
                            'Создание качественного 3D контента',
                            'Оформление в рамках рекламной компании',
                        ]}
                    />
                    <ServiceCard
                        id={6}
                        title="DOOH"
                        imageURL="Advertise"
                        description={[
                            'Создание рекламных роликов',
                            'Точечное размещение',
                            'Сетевое размещение',
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services
