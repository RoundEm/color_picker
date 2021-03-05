import React from 'react'
import './ColorSwatchCard.css'

// TODO: add button that allows the hex code to be copied to clipboard
export default function ColorSwatchCardDetailed({ hexCode }) {
    return (
        <div className='card'>
            <div 
                className='card_color card_color-large' 
                style={{ background: `#${hexCode}` }}
            >
            </div>
            
            <div className='card_label'>
                #{hexCode}
            </div>
        </div>
    )
}
