import { Link } from 'react-router-dom'

import './header.scss'
import Logo from '../../assets/logo.png'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <Link to="/" className="navbar-link">
                    Accueil
                </Link>
                <Link to="/about" className="navbar-link">
                    A propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
