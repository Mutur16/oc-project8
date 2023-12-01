import Card from '../Card'

import housingData from '../../housing.json'

import './container.scss'

function CardContainer() {
    return (
        <div className="card-container">
            {housingData.map((data) => (
                <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                />
            ))}
        </div>
    )
}

export default CardContainer
