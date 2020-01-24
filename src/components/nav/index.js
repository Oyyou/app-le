import React from "react";
import './nav.scss';
import { Link } from "react-router-dom";
import Apple from "../../content/Apple.png"


const Nav = () => {
    return(
        <nav>
            <Link className="link logo" to="/app-le"><img src={Apple}></img></Link>
            <ul>
                <li><Link className="link" to="/app-le">Home</Link></li>
                <li><Link className="link" to="/app-le/facts">Facts</Link></li>
                <li><Link className="link" to="/app-le/calculator">Calculator</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;