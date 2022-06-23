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
        <div>
            <footer className={`footer ${loading && "footer__loading"}`}>
                <div className="footer-icons-container">
                    <a className="link--platzi" href="https://platzi.com/p/TomAtomic/" target="_blank" rel="noreferrer">
                    <SiPlatzi className="footer-icon" />
                    </a>
                    <a className="link--github" href="https://github.com/TomAtomicDev" target="_blank" rel="noreferrer">
                    <BsGithub className="footer-icon" />
                    </a>
                    <a className="link--linkedin" href="https://www.linkedin.com/in/tompenaloza/" target="_blank" rel="noreferrer">
                    <SiLinkedin className="footer-icon" />
                    </a>
                </div>
                <a className="personalBrand" href="https://www.tomatomic.dev" target="_blank" rel="noreferrer">
                    <img src={byTomAtomicDev} alt="by TomAtomic.dev" />
                </a>
            </footer>

    </div>

    )
};

export { Footer };

