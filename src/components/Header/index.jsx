import { Link, useLocation } from 'react-router-dom'

import './header.scss'
import Logo from '../../assets/logo.png'

function Header() {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isAbout = location.pathname === '/about'

    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <Link to="/" className={isHome ? 'active' : ''}>
                    Accueil
                </Link>
                <Link to="/about" className={isAbout ? 'active' : ''}>
                    A propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
