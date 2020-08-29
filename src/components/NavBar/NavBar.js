import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";
import Categories from "../../Categories";

const NavBar = () => {
    const links = Categories.map(category => (
        <li key={category.id}>
            <NavLink to={/quotes/ + category.id}
                     className="navLink"
        >{category.title}</NavLink></li>
    ));
    return (
        <div className="navigation">
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/" className="navLink">All</NavLink></li>
                    {links}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;