import React from "react";
import './index.css';

const Footer = () => {
    return (
        <div className="footer page">
            <div className="social-link-list">
                <a href="https://github.com/Garden-Lab" target="_blank">
                    <img className="github-icon" src={process.env.PUBLIC_URL + '/github_64.png'} alt="github"/>
                </a>
            </div>
            <p>Copyright ⓒ 2022. Garden Lab all rights reserved</p>
        </div>
    );
};

export default Footer;
