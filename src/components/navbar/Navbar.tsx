import { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import NavbarButton from '../../ui/navbar-button/NavbarButton';
import { Link } from 'react-router-dom';
import burger from '../../images/burger.svg';

interface Props {
    wrapperRef: React.RefObject<HTMLImageElement>;
    showOptions: boolean;
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = (props) => {
    function handleOptionClick() {
        props.setShowOptions(false);
    }

    return (
        <nav id="navbar">
            <Link to="/">
                <div id="logo">
                    <img src={logo} alt="logo" />
                    <h1 className="H3">radar digitaly</h1>
                </div>
            </Link>
            <div id="navbar-links">
                <NavbarButton buttonName={'Services'} linkTo={'/services'} />
                <NavbarButton buttonName={'About us'} linkTo={'/'} />
                <NavbarButton buttonName={'Research'} linkTo={'/'} />
                <div id="contact-btn">
                    <NavbarButton buttonName={'Contact'} linkTo={'/contact'} />
                </div>
            </div>
            <img
                src={burger}
                ref={props.wrapperRef}
                alt="burger-icon"
                className="burger-icon"
                onClick={() => props.setShowOptions(!props.showOptions)}
            />
            <div
                className="menu-options"
                style={
                    props.showOptions
                        ? { display: 'block' }
                        : { display: 'none' }
                }
            >
                <NavbarButton
                    buttonName={'Services'}
                    linkTo={'/services'}
                    onClick={handleOptionClick}
                />
                <NavbarButton
                    buttonName={'About us'}
                    linkTo={'/'}
                    onClick={handleOptionClick}
                />
                <NavbarButton
                    buttonName={'Research'}
                    linkTo={'/'}
                    onClick={handleOptionClick}
                />
                <div id="contact-btn">
                    <NavbarButton
                        buttonName={'Contact'}
                        linkTo={'/contact'}
                        onClick={handleOptionClick}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
