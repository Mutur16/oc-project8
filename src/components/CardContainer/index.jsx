import Card from '../Card/index'

import housingData from '../../housing.json'

import './container.scss'

function CardContainer() {
    return (
        <div className="cardContainer">
            {housingData.map((data) => (
                <Card key={data.id} title={data.title} cover={data.cover} />
            ))}
        </div>
    )
}

export default CardContainer
