import React from 'react'
import './SidebarNav.css'

const colorCategories = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

export default function SidebarNav() {
    function handleDisplayColorGroup(e) {
        console.log('e.target.textContent: ', e.target.textContent)
        // const filteredColors = colors.filter(color => {
        //     return color.
        // })

    }

    return (
        <nav>
            <button
                // onClick={}
            >
                Random Color
            </button>
            <ul>
                {colorCategories.map(color => {
                    return (
                        <li 
                            id={color}
                            key={color}
                            onClick={handleDisplayColorGroup}
                        >
                            <a href='#'>{color}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
