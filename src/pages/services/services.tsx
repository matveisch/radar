import React from 'react'
import './services.css'
import ServiceCard from '../../components/service card/ServiceCard'

const Services = () => {
    return (
        <div id="main-wrapper">
            <h2 id="services-title" className="H2">
                Our Services
            </h2>
            <div id="services-wrapper" className="paragraph">
                <p id="services-paragraph">
                    Наша команда консультирует по поводу рекламной компании в
                    интернете, создание концептов рекламных компаний и
                    интеграцию в места размещения.
                </p>
                <div className="service-card-wrapper">
                    <ServiceCard
                        title="Telegram"
                        imageURL="telegram-circle"
                        description={[
                            'Таргетная реклама',
                            'Создание постов',
                            'Интеграции',
                        ]}
                    />
                </div>
                <div className="service-card-wrapper">
                    <ServiceCard
                        title="Instagram"
                        imageURL="instagram"
                        description={[
                            'Таргетная реклама',
                            'Создание постов',
                            'Интеграции',
                        ]}
                    />
                </div>
                <div className="service-card-wrapper">
                    <ServiceCard
                        title="Facebook"
                        imageURL="facebook-circle"
                        description={[
                            'Таргетная реклама',
                            'Создание постов',
                            'Интеграции',
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services
