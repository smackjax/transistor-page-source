import React from 'react';
import PropTypes from 'prop-types';
import { HomeLink, ContactLink } from '../_links';
import './nav-dropdown.style.css';


const NavDropdown = (props)=>(
    <nav
    onClick={props.handleToggle}
    className={"nav-dropdown " + (props.open ? "open" : "")}
    >
        <HomeLink 
        className="dropdown-link"
        />
        <ContactLink 
        className="dropdown-link"
        />
    </nav>
)

NavDropdown.propTypes = {
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default NavDropdown;