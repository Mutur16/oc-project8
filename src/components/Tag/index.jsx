import './tag.scss'

function Tag({ tags }) {
    const results = []
    tags.forEach((tag, index) => {
        results.push(
            <div key={index} className='tag'>
                <p>{tag}</p>
            </div>
        )
    })
    return <div className='tag-container'>{results}</div>
}

export default Tag
