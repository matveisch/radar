import React from 'react';
import './servicesSection.css';
import ServiceCard from '../../components/service card/ServiceCard';
import useServicesList from '../../data/servicesList';

const Services = () => {
    const servicesArr = useServicesList();

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
                    {servicesArr.map((item, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                id={item.id}
                                title={item.name}
                                imageURL={item.img}
                                description={item.describtionArr}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
