import './host.scss'

function Host({ name, picture }) {
    return (
        <div className="host-details">
            <p>{name}</p> <img src={picture} alt="Visage de l'host" />
        </div>
    )
}

export default Host
