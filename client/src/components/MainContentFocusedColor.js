import React from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import './MainContentFocusedColor.css'
import ColorSwatchLargeCard from './ColorSwatchLargeCard'

export default function MainContentFocusedColor() {
    const { id } = useParams()
    const history = useHistory()
    console.log('id: ', id)
    // const { state: { colorObject }} = useLocation()
    // console.log('colorObject: ', colorObject)

    return (
        <div>
            <ColorSwatchLargeCard hexCode={id}/>

            <button 
                className='clear_btn' 
                onClick={() => history.push('/')}
            >
                Clear
            </button>
        </div>
    )
}
