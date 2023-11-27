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
        <div className="collapsible">
            <div className="collapsibleHeader">
                <span className="collapsibleLabel">{label}</span>
                <img
                    src={arrow}
                    alt="icone de flèche"
                    className={`collapsibleArrow ${isOpen ? 'turnArrow' : ''}`}
                    onClick={toggleCollapse}
                />
            </div>
            <div className="collapsibleContent" ref={contentRef}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Collapse
