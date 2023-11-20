import { Link } from 'react-router-dom'

import './error.scss'

function Error() {
    return (
        <main>
            <div className='error'>
                <h1>404</h1>
                <p>Oups! La page que <br />
                    vous demandez n'existe pas.</p>
                <Link to="/" className='home-link'>Retourner sur la page d'accueil</Link>
            </div>
        </main>
    )
}

export default Error
