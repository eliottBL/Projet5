import logo from '../assets/logo-kasa.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (<header>
        <img src={logo} alt='logo Kasa' className="logo" />
        <nav className="menu">
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A Propos</Link>
        </nav>
    </header>)
}

export default Header