import './rate.scss'

function Rate({ rating }) {
    let allStars = []
    for (let i = 0; i < 5; i++) {
        let starClass = rating > i ? 'colored-star' : 'no-color-star'
        let star = <i className={`fa-solid fa-star ${starClass}`} key={i}></i>
        allStars.push(star)
    }
    return <div className="stars-container">{allStars}</div>
}

export default Rate
