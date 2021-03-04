import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './SidebarNav.css'

export default function SidebarNav({ allColors, colorGroups }) {
    const history = useHistory()

    function handleGetRandomColor() {
        const randomIndex = Math.floor(Math.random() * allColors.length)
        const color = allColors[randomIndex]
        history.push(`/color/${color.hex_code}`, { colorObject: color })
    }

    return (
        <nav>
            <button onClick={handleGetRandomColor}>
                Random Color
            </button>

            <ul id='sidebar_ul'>
                {colorGroups.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            <Link to={{
                                pathname: `/color_group/${name}`,
                                state: { id }
                            }}>
                                {name[0].toUpperCase() + name.slice(1)}
                            </Link>
                        </li>
                    )
                })}

                <li>
                    <Link to='/'>
                        All Colors
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
