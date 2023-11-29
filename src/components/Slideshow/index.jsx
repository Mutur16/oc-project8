import './slideshow.scss'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'

import { useState } from 'react'

function Slideshow({ title, pictures }) {
    const [imageIndex, setImageIndex] = useState(0)

    const images = []
    pictures.forEach((image, index) => {
        images.push(
            <img
                key={index}
                src={image}
                alt={title}
                className="slideshow-slide-img"
                style={{ translate: `${-100 * imageIndex}%` }}
            />
        )
    })

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    function showNextImage() {
        setImageIndex((index) => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div className="slideshow">
            <div className="slideshow-slides">{images}</div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={showPrevImage}
                        className="slideshow-btn slideshow-btn-left"
                    >
                        <img src={leftArrow} alt="Flèche gauche" />
                    </button>
                    <button
                        onClick={showNextImage}
                        className="slideshow-btn slideshow-btn-right"
                    >
                        <img src={rightArrow} alt="Flèche droite" />
                    </button>
                    <span className="slideshow-slide-number">
                        {imageIndex + 1} / {images.length}
                    </span>
                </>
            )}
        </div>
    )
}

export default Slideshow
