import './rate.scss'

function Rate({ rating }) {
    let allStars = []
    for (let i = 0; i < 5; i++) {
        if (rating > i) {
            allStars.push(
                <i
                    className="fa-solid fa-star"
                    style={{ color: '#ff6161' }}
                    key={i}
                ></i>
            )
        } else {
            allStars.push(
                <i
                    className="fa-solid fa-star"
                    style={{ color: '#e3e3e3' }}
                    key={i}
                ></i>
            )
        }
    }
    return <div className='stars-container'>{allStars}</div>
}

export default Rate
