import React from 'react';

import NavbarButton from '../../ui/navbar-button/NavbarButton';
import logo from '../../images/logo.png';
import telegram from '../../images/telegram-filled.svg';
import whatsapp from '../../images/whatsapp.svg';
import Sublink from '../../ui/sublink/Sublink';
import useServicesList from '../../data/servicesList';
import './Footer.css';

const Footer = () => {
    const servicesList = useServicesList();
    return (
        <div id="footer-main-wrapper">
            <div id="footer-left-container">
                <div id="footer-logo">
                    <img src={logo} alt="logo" />
                    <h1 className="H3">radar digitaly</h1>
                </div>
                <div id="footer-contact">
                    <a className="link">email@radar.com</a>
                    <a>012-345-6789</a>
                    <div id="footer-social-icons">
                        <a href="">
                            <img src={telegram} alt="icon" />
                        </a>
                        <a href="">
                            <img src={whatsapp} alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="footer-right-container">
                <div id="footer-menu">
                    <NavbarButton
                        buttonName={'Services'}
                        linkTo={'/services'}
                    />
                    <NavbarButton buttonName={'About us'} linkTo={'/'} />
                    <NavbarButton buttonName={'Research'} linkTo={'/'} />
                    <NavbarButton buttonName={'Contact'} linkTo={'/contact'} />
                </div>
                <div id="footer-submenu">
                    {servicesList.map((item, index) => {
                        return (
                            <Sublink
                                key={item.id}
                                to="/services"
                                title={item.name}
                                state={{ checkedServiceIndex: item.id }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;
