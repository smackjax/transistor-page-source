import React from 'react';
import {  transistorLogoDark } from '../_images';
import Navbar from './navbar/navbar.component';
import NavDropdown from './nav-dropdown/nav-dropdown.component';
import ToggleBtn from './drop-toggle-btn/drop-toggle-btn.component';

import './header.style.css';

class Header extends React.Component {
    state={ 
        navOpen: false
    }

    toggleDropdown = ()=>{
        const navOpen= !this.state.navOpen;
        this.setState({ navOpen });
    }

    render(){
        return (
        <header className="main-header">
            <div className="content-wrapper">
                <a 
                href="https://www.supergiantgames.com/games/transistor/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-wrapper">
                    <img src={ transistorLogoDark } alt="logo" className="logo-img"/>
                </a>

                <ToggleBtn
                open={this.state.navOpen}
                handleToggle={this.toggleDropdown}
                />

                <Navbar/>
            </div>

            <NavDropdown 
            open={this.state.navOpen}
            handleToggle={this.toggleDropdown}
            />
        </header>
        )
    }
}
    
export default Header;