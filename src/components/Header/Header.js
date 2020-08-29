import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Quotes Central</h1>
            <nav className="header-nav">
                <ul>
                    <li><NavLink to="/"
                                 className="headerLink"
                    >Quotes</NavLink></li>
                    <li><NavLink to="/quote-add"
                                 className="headerLink"
                    >Submit new quote</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;