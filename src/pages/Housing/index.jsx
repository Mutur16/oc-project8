import { useParams } from 'react-router-dom'
import housingData from '../../housing.json'
import Slideshow from '../../components/Slideshow/index.jsx'

function Housing() {
    let { id } = useParams()
    let currentData = housingData.find((item) => item.id === id)

    return (
        <main>
            <Slideshow
                title={currentData.title}
                pictures={currentData.pictures}
            />
        </main>
    )
}

export default Housing
