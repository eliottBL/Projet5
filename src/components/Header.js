import logo from '../assets/logo-kasa.png';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
    let AccStyle = 'none'
    let AppStyle = 'none'
    const page = useLocation()

    if (page.pathname == '/') {
        AccStyle = 'underline'
        AppStyle = 'none'
    } else if (page.pathname == '/apropos') {
        AccStyle = 'none'
        AppStyle = 'underline'
    }



    return (<header>
        <img src={logo} alt='logo Kasa' className="logo" />
        <nav className="menu">
            <Link className={AccStyle} to="/">Accueil</Link>
            <Link className={AppStyle} to="/apropos">A Propos</Link>
        </nav>
    </header>)
}

export default Header