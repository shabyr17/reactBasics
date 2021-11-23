import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle, faBars,  faHome, faPen, faUsers, faComments} from '@fortawesome/free-solid-svg-icons'

function HeaderContainer() {
    return (<>
        <header className="tm-header" id="tm-header">
            <div className="tm-header-wrapper">
                <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="tm-site-header">
                    <div className="mb-3 mx-auto tm-site-logo">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </div>
                    <h1 className="text-center">Xtra Blog</h1>
                </div>
                <nav className="tm-nav" id="tm-nav">
                    <ul>
                        <li className="tm-nav-item active"><a href="index.html" className="tm-nav-link">
                            <FontAwesomeIcon icon={faHome} />
                            Blog Home
                        </a></li>
                        <li className="tm-nav-item"><a href="post.html" className="tm-nav-link">
                            <FontAwesomeIcon icon={faPen} />
                            Single Post
                        </a></li>
                        <li className="tm-nav-item"><a href="about.html" className="tm-nav-link">
                            <FontAwesomeIcon icon={faUsers} />
                            About Xtra
                        </a></li>
                        <li className="tm-nav-item"><a href="contact.html" className="tm-nav-link">
                            <FontAwesomeIcon icon={faComments} />
                            Contact Us
                        </a></li>
                    </ul>
                </nav>
                <div className="tm-mb-65">
                    <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://twitter.com" className="tm-social-link">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://instagram.com" className="tm-social-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://linkedin.com" className="tm-social-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <p className="tm-mb-80 pr-5 text-white">
                    Xtra Blog is a multi-purpose HTML template from TemplateMo website. Left side is a sticky menu bar. Right side content will scroll up and down.
                </p>
            </div>
        </header>
    </>)
}

export default HeaderContainer;