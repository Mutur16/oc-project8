import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import housingData from '../../housing.json'
import Slideshow from '../../components/Slideshow/index.jsx'
import Tag from '../../components/Tag/index.jsx'
import Rate from '../../components/Rate/index.jsx'
import Host from '../../components/Host/index.jsx'
import Collapse from '../../components/Collapse/index.jsx'

import './housing.scss'

function Housing() {
    let { id } = useParams()
    let currentData = housingData.find((item) => item.id === id)

    const equipments = currentData.equipments.map((equipment) => (
        <li>{equipment}</li>
    ))

    return (
        <main>
            <Slideshow
                title={currentData.title}
                pictures={currentData.pictures}
            />
            <div className="main-container">
                <div className="title-container">
                    <h2>{currentData.title}</h2>
                    <p>{currentData.location}</p>
                </div>
                <Tag tags={currentData.tags} />
                <Host
                    name={currentData.host.name}
                    picture={currentData.host.picture}
                    className="host-container"
                />
                <Rate rating={currentData.rating} />
            </div>
            <div className="housing-collapse">
                <Collapse
                    label="Description"
                    text={currentData.description}
                    className="description-collapse"
                />
                <Collapse
                    label="Equipements"
                    text={equipments}
                    className="equipments-collapse"
                />
            </div>
        </main>
    )
}

export default Housing
