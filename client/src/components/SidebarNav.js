import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarNav.css'

// const colorCategories = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', brown', gray']

export default function SidebarNav({ colorGroups }) {
    return (
        <nav>
            <button
                // onClick={}
            >
                Random Color
            </button>
            <ul>
                {colorGroups.map(({ id, name }) => {
                    console.log('color name: ', id)
                    return (
                        <li key={id}>
                            <Link to={`/color/${id}`}>
                                {name[0].toUpperCase() + name.slice(1)}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
