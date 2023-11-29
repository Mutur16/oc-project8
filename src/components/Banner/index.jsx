import './banner.scss'

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.img} alt={props.alt} />
            {props.text && <p className="banner-text">{props.text}</p>}
        </div>
    )
}

export default Banner
