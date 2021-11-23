import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialContainer(props) {
    return (
        <div className="social-container">
            <a href="#facebook" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#google" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#linkedin" className="social"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>)
}

export default SocialContainer;