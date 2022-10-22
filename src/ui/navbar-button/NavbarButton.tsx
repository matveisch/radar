import React from 'react';
import { Link } from "react-router-dom";
import './NavbarButton.css';

interface Props {
    buttonName: string;
    linkTo: string;
}

const NavbarButton: React.FC<Props> = (props) => {
    return (
        <Link to={props.linkTo} className="navbar-button link">{props.buttonName}</Link>
    );
};

export default NavbarButton;