import React from 'react'
import { Link } from 'react-router-dom'
import './ColorSwatchListCard.css'

export default function ColorSwatchListCard({ hexCode, id }) {
    return (
        <Link 
            to={`/color/${hexCode}`}
            className='card' 
        >
            <div>
                <div 
                    className='card_color' 
                    style={{ background: `#${hexCode}` }}
                >
                </div>
                
                <div className='card_label'>
                    #{hexCode}
                </div>
            </div>
        </Link>
    )
}
