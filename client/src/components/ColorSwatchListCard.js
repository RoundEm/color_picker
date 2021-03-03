import React from 'react'
import './ColorSwatchListCard.css'

export default function ColorSwatchListCard(props) {
    console.log('props.colorCode: ', props.colorCode)
    return (
        <div 
            className='card'
            // onClick={}
        >
            <div 
                className='card_color' 
                style={{ background: `#${props.colorCode}` }}
            >
            </div>
            
            <div className='card_label'>
                #{props.colorCode}
            </div>
        </div>
    )
}
