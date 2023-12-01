import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './error.scss'

function Error() {
    return (
        <body>
            <Header />
            <div className="error">
                <h1>404</h1>
                <p>
                    Oups! La page que <br />
                    vous demandez n'existe pas.
                </p>
                <Link to="/" className="home-link">
                    Retourner sur la page d'accueil
                </Link>
            </div>
            <Footer />
        </body>
    )
}

export default Error
