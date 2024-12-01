import {Link, NavLink} from "react-router-dom";
import exodusLogoBlack from '../assets/images/exodus-logo-black.svg';
import facebookLogo from '../assets/images/facebook-logo-icon.png';
import twitterLogo from '../assets/images/twitter-logo-icon.png';
import youtubeLogo from '../assets/images/youtube-logo-icon.png';

export default function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <img src={exodusLogoBlack} alt="logo" className="logo"/>
                <div className="footer__useful-links">
                    <div className="footer__link-section">
                        <h3>Products</h3>
                        <ul>
                            <li><Link to="*">Volutpat eors</Link></li>
                            <li><Link to="*">Amet vitae</Link></li>
                            <li><Link to="*">Mauris habitant</Link></li>
                            <li><Link to="*">Sit faucibus</Link></li>
                            <li><Link to="*">Facilisis sed</Link></li>
                            <li><Link to="*">Nulla pallentesque</Link></li>
                            <li><Link to="*">Velit morbi</Link></li>
                            <li><Link to="*">Quisque laoreet</Link></li>
                        </ul>
                    </div>
                    <div className="footer__link-section">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="*">Turpis rutrum</Link></li>
                            <li><Link to="*">Purus Eget</Link></li>
                            <li><Link to="*">Id Gravida</Link></li>
                            <li><Link to="*">Dignissim Non</Link></li>
                            <li><Link to="*">Venenatis Curabitur</Link></li>
                            <li><Link to="*">Viverra Id</Link></li>
                            <li><Link to="*">Habitasse Cras</Link></li>
                            <li><Link to="*">Nunc Erat</Link></li>
                        </ul>
                    </div>
                    <div className="footer__link-section">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="*">Volutpat eors</Link></li>
                            <li><Link to="*">Amet vitae</Link></li>
                            <li><Link to="*">Mauris habitant</Link></li>
                            <li><Link to="*">Sit faucibus</Link></li>
                            <li><Link to="*">Facilisis sed</Link></li>
                            <li><Link to="*">Nulla pallentesque</Link></li>
                            <li><Link to="*">Velit morbi</Link></li>
                            <li><Link to="*">Quisque laoreet</Link></li>
                        </ul>
                    </div>
                    <div className="footer__link-section">
                        <h3>Leo sed</h3>
                        <ul>
                            <li><Link to="*">Turpis rutrum</Link></li>
                            <li><Link to="*">Purus Eget</Link></li>
                            <li><Link to="*">Id Gravida</Link></li>
                            <li><Link to="*">Dignissim Non</Link></li>
                            <li><Link to="*">Venenatis Curabitur</Link></li>
                            <li><Link to="*">Viverra Id</Link></li>
                            <li><Link to="*">Habitasse Cras</Link></li>
                            <li><Link to="*">Nunc Erat</Link></li>
                        </ul>
                    </div>
                    <div className="footer__link-section">
                        <h3>Scelerisque</h3>
                        <ul>
                            <li><Link to="*">Volutpat eors</Link></li>
                            <li><Link to="*">Amet vitae</Link></li>
                            <li><Link to="*">Mauris habitant</Link></li>
                            <li><Link to="*">Sit faucibus</Link></li>
                            <li><Link to="*">Facilisis sed</Link></li>
                            <li><Link to="*">Nulla pallentesque</Link></li>
                            <li><Link to="*">Velit morbi</Link></li>
                            <li><Link to="*">Quisque laoreet</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__separator"></div>
                <div className="footer__bottom">
                    <p className="footer___copy">&copy;Copyright 2020</p>
                    <ul className="footer__media-links">
                        <li><Link to="*"><img src={facebookLogo} alt="facebook" className="icon"/></Link></li>
                        <li><Link to="*"><img src={twitterLogo} alt="twitter" className="icon"/></Link></li>
                        <li><Link to="*"><img src={youtubeLogo} alt="youtube" className="icon"/></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}