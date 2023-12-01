import { useParams } from 'react-router-dom'

import housingData from '../../housing.json'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Rate from '../../components/Rate'
import Host from '../../components/Host'
import Collapse from '../../components/Collapse'
import Error from '../Error'

import './housing.scss'

function Housing() {
    let { id } = useParams()
    let currentData = housingData.find((item) => item.id === id)
    if (currentData === undefined) {
        return <Error />
    }

    const equipments = currentData.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
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
