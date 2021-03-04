import React from 'react'
import './ColorSwatchLargeCard.css'

export default function ColorSwatchLargeCard({ hexCode }) {
    return (
        <div className='card_large'>
            <div 
                className='card_color_large' 
                style={{ background: `#${hexCode}` }}
            >
            </div>
            
            <div className='card_label'>
                #{hexCode}
            </div>
        </div>
    )
}
