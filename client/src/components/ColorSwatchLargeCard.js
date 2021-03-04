import React from 'react'
import './ColorSwatchLargeCard.css'

// TODO: add button that allows the hex code to be copied to clipboard
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
