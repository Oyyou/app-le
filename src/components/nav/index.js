import React from "react";
import './nav.scss';
import { Link } from "react-router-dom";
import Apple from "../../content/Apple.png"


const Nav = () => {
    return(
        <nav>
            <Link className="link logo" to="/"><img src={Apple}></img></Link>
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/facts">Facts</Link></li>
                <li><Link className="link" to="/calculator">Calculator</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;