import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarButton.css';

interface Props {
    buttonName: string;
    linkTo: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavbarButton: React.FC<Props> = (props) => {
    return (
        <Link
            to={props.linkTo}
            className="navbar-button link"
            onClick={props.onClick}
        >
            {props.buttonName}
        </Link>
    );
};

export default NavbarButton;
