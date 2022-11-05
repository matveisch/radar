import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import NavbarButton from '../../ui/navbar-button/NavbarButton'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="logo">
                <img src={logo} alt="logo" />
                <h1 className="H3">radar digitaly</h1>
            </div>
            <div id="navbar-links">
                <NavbarButton buttonName={'Services'} linkTo={'/'} />
                <NavbarButton buttonName={'About us'} linkTo={'/'} />
                <NavbarButton buttonName={'Research'} linkTo={'/'} />
                <NavbarButton buttonName={'Contact'} linkTo={'/contact'} />
            </div>
        </nav>
    )
}

export default Navbar
