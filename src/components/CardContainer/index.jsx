import Card from '../Card/index'

import housingData from '../../housing.json'

import './container.scss'

function CardContainer() {
    const firstRow = housingData.slice(0, 3)
    const secondRow = housingData.slice(3, 6)

    return (
        <div className="cardsContainer">
            <div className="card-row">
                {firstRow.map((data) => (
                    <Card key={data.id} title={data.title} cover={data.cover} />
                ))}
            </div>
            <div className="card-row">
                {secondRow.map((data) => (
                    <Card key={data.id} title={data.title} cover={data.cover} />
                ))}
            </div>
        </div>
    )
}

export default CardContainer
