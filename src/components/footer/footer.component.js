import React from 'react';
import { transistorLogoDark } from '../_images';
import './footer.style.css';

const Footer = (props)=>{
    return (
        <footer className="main-footer">
            <div className="logo-wrapper">
                <img src={ transistorLogoDark } alt="logo" className="logo-img"/>
            </div>

            <div className="footer-links-wrapper">
                <a
                href="https://github.com/smackjax"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                >
                    Github
                    <i className="fa fa-github link-icon" />
                </a>
                <a
                href="https://linkedin.com/in/smackjax/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                >
                    LinkedIn
                    <i className="fa fa-linkedin link-icon" />
                </a>
                <a
                href="https://maxbernard.design"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link smackjax-site"
                >
                    Personal Site

                </a>
            </div>
        </footer>
    )
}

export default Footer;