import React from "react";
import './services.css'
import ServiceCard from "../../components/service card/Service-Card";

const Services = () => {
    return(
        <div id="main-wrapper">
            <h2 id="services-title" className="H2">Our Services</h2>
            <div id="services-wrapper" className="paragraph">
                <p id="services-paragraph">Наша команда консультирует по поводу рекламной компании в интернете, создание концептов рекламных компаний и интеграцию в места размещения.</p>
                <ServiceCard title="Telegram" description={["Таргетная реклама", "Создание постов", "Интеграции"]}/>
                <ServiceCard title="Telegram" description={["Таргетная реклама", "Создание постов", "Интеграции"]}/>
                <ServiceCard title="Telegram" description={["Таргетная реклама", "Создание постов", "Интеграции"]}/>
            </div>
        </div>
    )
}

export default Services;