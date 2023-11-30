import { useParams } from 'react-router-dom'
import housingData from '../../housing.json'
import Slideshow from '../../components/Slideshow/index.jsx'
import Tag from '../../components/Tag/index.jsx'
import Rate from '../../components/Rate/index.jsx'
import './housing.scss'

function Housing() {
    let { id } = useParams()
    let currentData = housingData.find((item) => item.id === id)

    return (
        <main>
            <Slideshow
                title={currentData.title}
                pictures={currentData.pictures}
            />
            <div className='main-container'>
                <div className="title-container">
                    <h2>{currentData.title}</h2>
                    <p>{currentData.location}</p>
                </div>
                <Tag tags={currentData.tags} className='tag-container'/>
                <div className='host-container'></div>
                <Rate rating={currentData.rating} className='rate-container'/>
            </div>
        </main>
    )
}

export default Housing
