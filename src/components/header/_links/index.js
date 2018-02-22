import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav-links.style.css';

const HomeLink = (props)=>(
    <NavLink
    {...props}
    to="/home"
    className={ "nav-link btn " + (props.className || "") }
    >
        <i className="fa fa-flask"/>
        Home
    </NavLink>
)

const ContactLink = (props)=>(
    <NavLink
    {...props}
    to="/contact"
    className={"nav-link btn " + (props.className || "")}
    >
        <i className="fa fa-space-shuttle"/>
        Contact
    </NavLink>
)

export {
    HomeLink,
    ContactLink,
}