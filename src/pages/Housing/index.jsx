import { useParams } from 'react-router-dom'
import housingData from '../../housing.json'
import Slideshow from '../../components/Slideshow/index.jsx'
import Tag from '../../components/Tag/index.jsx'
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
            <div className='title'>
                <h2>{currentData.title}</h2>
                <p>{currentData.location}</p>
            </div>
            <Tag 
                tags={currentData.tags}
            />
        </main>
    )
}

export default Housing
