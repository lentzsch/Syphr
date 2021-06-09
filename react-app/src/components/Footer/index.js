// frontend/src/components/Footer/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content-container">
            <div className="footer-links-container">
            <div className="github-link-container">
                <Link className="github-link" to={{ pathname: "https://github.com/scrub1737" }} target="_blank">
                    <i className="fab fa-github"></i>
                </Link>
            </div>
            <div className="linkedin-link-container">
                <Link className="linkedin-link" to={{ pathname: "https://www.linkedin.com/in/jameslentzsch" }} target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;