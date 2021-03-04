import React from 'react'
import './ColorSwatchListCard.css'

export default function ColorSwatchListCard({ colorCode }) {
    // console.log('colorCode: ', colorCode)
    return (
        <div 
            className='card'
            // onClick={}
        >
            <div 
                className='card_color' 
                style={{ background: `#${colorCode}` }}
            >
            </div>
            
            <div className='card_label'>
                #{colorCode}
            </div>
        </div>
    )
}
