import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import NavbarButton from '../../ui/navbar-button/NavbarButton'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to="/">
                <div id="logo">
                    <img src={logo} alt="logo" />
                    <h1 className="H3">radar digitaly</h1>
                </div>
            </Link>
            <div id="navbar-links">
                <NavbarButton buttonName={'Services'} linkTo={'/'} />
                <NavbarButton buttonName={'About us'} linkTo={'/'} />
                <NavbarButton buttonName={'Research'} linkTo={'/'} />
                <div id="contact-btn">
                    <NavbarButton buttonName={'Contact'} linkTo={'/contact'} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
