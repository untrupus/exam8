import React from 'react';
import './SingleQuote.css'
import {NavLink} from "react-router-dom";

const SingleQuote = props => {

    return (
        <div className="singleQuote">
            <div className="quoteText">
                <p className="text">{props.text}</p>
                <p>-{props.author}-</p>
            </div>
            <button type="button" className="btnEdit">
                <NavLink
                    to={"/quotes/" + props.id + '/edit'}
                    className="btnLink"
                >Edit</NavLink>
            </button>
        </div>
    );
};

export default SingleQuote;