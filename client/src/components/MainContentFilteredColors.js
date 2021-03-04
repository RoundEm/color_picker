import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchListCard from './ColorSwatchListCard'

export default function MainContentFilteredColors() {
    const [filteredColors, setFilteredColors] = useState([])
    const { id } = useParams()
    // console.log('color id: ', id)

    // TODO: get data from allColors state instead? If you keep it as fetch then add loading icon
    useEffect(() => {
        axios.get(`/color_group/${id}`)
            .then((res) => {
                setFilteredColors(res.data)
            })
            .catch((err) => {
                console.log('get colors err: ', err)
            })
            return () => {
                setFilteredColors([])
            }
    }, [id])

    return (
        <ColorSwatchGrid>
            {filteredColors.map(({ id, hex_code }) => {
                return (
                    <ColorSwatchListCard 
                        key={id}
                        hexCode={hex_code} 
                    />
                )
            })}
        </ColorSwatchGrid>
    )
}
