import React from 'react';
import { TodoContext } from '../TodoContext';
import byTomAtomicDev from '../Assets/byTomAtomicDev--light.JPG';
import './Footer.css';

function Footer () {
    const {loading}= React.useContext(TodoContext);
    return (
        <footer className={`footer ${loading && "footer__loading"}`}>
{/*             <div className="footer-icons-container">
                <i className="footer-icon"></i>
                <i className="footer-icon"></i>
                <i className="footer-icon"></i>
            </div> */}
            <div className="personalBrand">
                <img src={byTomAtomicDev} alt="by TomAtomic.dev" />
            </div>
        </footer>
    )
};

export { Footer };

