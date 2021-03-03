import React from 'react'
import './LayoutGrid.css'

export default function ContentGrid(props) {
    return (
        <div id='layout_grid_container'>
            {props.children}
        </div>
    )
}
