import { Link, NavLink } from "react-router-dom";
import exodusLogo from '../assets/images/exodus-logo.svg';

export default function Header() {
    return(
        <header className="header">
            <img src={exodusLogo} alt="logo" className="logo" />
            <nav>
                <ul className="header__list">
                    <li>
                        <Link to="*">Home</Link>
                    </li>
                    <li>
                        <Link to="*">Wallet</Link>
                    </li>
                    <li>
                        <Link to="*">Exchange</Link>
                    </li>
                    <li>
                        <Link to="*">Support</Link>
                    </li>
                    <li>
                        <Link to="*">Company</Link>
                    </li>
                </ul>
            </nav>
            <Link to="*"><span className="btn">DOWNLOAD</span></Link>
        </header>
    )
}