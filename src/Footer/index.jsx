import React from 'react';
import { TodoContext } from '../TodoContext';
import { SiPlatzi } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';


import byTomAtomicDev from '../Assets/byTomAtomicDev--light.JPG';
import './Footer.css';

function Footer () {
    const {loading}= React.useContext(TodoContext);
    return (
        <footer className={`footer ${loading && "footer__loading"}`}>
            <div className="footer-icons-container">
                <a className="link--platzi" href="https://platzi.com/p/TomAtomic/" target="_blank">
                <SiPlatzi className="footer-icon" />
                </a>
                <a className="link--github" href="https://github.com/TomAtomicDev" target="_blank">
                <BsGithub className="footer-icon" />
                </a>
                <a className="link--linkedin" href="https://www.linkedin.com/in/tompenaloza/" target="_blank">
                <SiLinkedin className="footer-icon" />
                </a>
            </div>
            <div className="personalBrand">
                <img src={byTomAtomicDev} alt="by TomAtomic.dev" />
            </div>
        </footer>
    )
};

export { Footer };

