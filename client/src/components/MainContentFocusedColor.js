import React from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import ColorSwatchCardDetailed from './ColorSwatchCardDetailed'

export default function MainContentFocusedColor() {
    const { id } = useParams()
    const history = useHistory()
    // const { state: { colorObject }} = useLocation()
    // console.log('colorObject: ', colorObject)

    return (
        <div>
            <ColorSwatchCardDetailed hexCode={id}/>

            <button 
                className='clear_btn' 
                onClick={() => history.push('/')}
            >
                Clear
            </button>
        </div>
    )
}
