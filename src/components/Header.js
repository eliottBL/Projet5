import logo from '../assets/logo-kasa.png';
import '../styles/Header.css';

function Header() {
    return (<header>
        <img src={logo} alt='logo Kasa' className="logo" />
        <nav className="menu">
            <a href="">Accueil </a>
            <a href="">A Propos</a>
        </nav>
    </header>)
}

export default Header