import React from 'react';
import { HomeLink, ContactLink } from '../_links';
import './navbar.style.css';

const Navbar = (props)=>(
    <nav 
    className="main-nav">
        <HomeLink />
        <ContactLink />
    </nav>
)

export default Navbar;