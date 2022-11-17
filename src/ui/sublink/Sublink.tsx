import React from 'react';
import { Link } from 'react-router-dom';

import './Sublink.css';
interface Props {
    to: string;
    title: string;
    state: {};
}

const Sublink: React.FC<Props> = (props: Props) => {
    return (
        <Link to={props.to} state={props.state}>
            <p id="sublink" className="link">
                {props.title}
            </p>
        </Link>
    );
};
export default Sublink;
