import React from 'react'
import './ColorSwatchGrid.css'

export default function ColorSwatchGrid(props) {
    return (
        <div id='list_view_grid_container'>
            {props.children}
        </div>
    )
}
