import { Link } from 'react-router-dom'

import './card.scss'

function Card({ title, cover }) {
    return (
        <Link to="/housing">
            <div className="card">
                <img src={cover} alt={title} />
                <p className="cardTitle">{title}</p>
            </div>
        </Link>
    )
}

export default Card
