import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navigation">
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/"
                                 className="navLink"

                    >All</NavLink></li>
                    <li><NavLink to="/quotes/star-wars"
                                 className="navLink"

                    >Star Wars</NavLink></li>
                    <li><NavLink to="/quotes/famous-people"
                                 className="navLink"

                    >Famous People</NavLink></li>
                    <li><NavLink to="/quotes/saying"
                                 className="navLink"

                    >Saying</NavLink></li>
                    <li><NavLink to='/quotes/humour'
                                 className="navLink"

                    >Humour</NavLink></li>
                    <li><NavLink to="/quotes/motivation"
                                 className="navLink"

                    >Motivation</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;