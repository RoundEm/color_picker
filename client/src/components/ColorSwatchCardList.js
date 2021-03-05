import React from 'react'
import { Link } from 'react-router-dom'
import './ColorSwatchCard.css'

export default function ColorSwatchCardList({ hexCode, id }) {
    return (
        <Link 
            to={`/color/${hexCode}`}
            className='card card-small' 
        >
            <div>
                <div 
                    className='card_color card_color-small ' 
                    style={{ background: `#${hexCode}` }}
                >
                </div>
                
                {/* TODO: This leaves lots of blank space above it when there are less than 16 grid items. Change grid setup? */}
                <div className='card_label'>
                    #{hexCode}
                </div>
            </div>
        </Link>
    )
}
