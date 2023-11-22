import './banner.scss'

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.img} alt={props.alt} />
            {props.text && <p className="bannerText">{props.text}</p>}
        </div>
    )
}

export default Banner
