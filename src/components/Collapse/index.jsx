import './collapse.scss'
import React, { useState, useRef } from 'react'
import arrow from '../../assets/arrow.png'

function Collapse({ label, text }) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
        const content = contentRef.current

        if (content) {
            content.style.maxHeight = isOpen ? '0' : `${content.scrollHeight}px`
        }
    }

    return (
        <div>
            <div className="collapsible-header">
                <span className="collapsible-label">{label}</span>
                <img
                    src={arrow}
                    alt="icone de flèche"
                    className={`collapsible-arrow ${
                        isOpen ? 'turn-arrow' : ''
                    }`}
                    onClick={toggleCollapse}
                />
            </div>
            <div className="collapsible-content" ref={contentRef}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Collapse
