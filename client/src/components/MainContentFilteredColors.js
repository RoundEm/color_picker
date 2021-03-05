import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchCardList from './ColorSwatchCardList'

export default function MainContentFilteredColors({ allColors }) {
    const [filteredColors, setFilteredColors] = useState([])

    // TODO: `id` for the commented out code is technically the color_group_id being passed as the color group's `name` param. If you change back to fetching from db you'll need to update code below where the actual `id` is used
    // const { id: colorGroupIdAsName } = useParams()
    // console.log('colorGroupIdAsName: ', colorGroupIdAsName)
    const history = useHistory()
    const { state: { id: colorGroupIdAsInt }} = useLocation()
    
    useEffect(() => {
        const _filteredColors = allColors.filter(color => {
            return color.color_group_id === colorGroupIdAsInt
        })
        setFilteredColors(_filteredColors)
        return () => {
            setFilteredColors([])
        }
    }, [colorGroupIdAsInt])

    // TODO: I initially was getting the data from my API but since it was slower and I haven't setup caching I decided to just filter through all of the colors in App state from the initial API request
    // useEffect(() => {
    //     axios.get(`/color_group/${colorGroupIdAsName}`)
    //         .then((res) => {
    //             setFilteredColors(res.data)
    //         })
    //         .catch((err) => {
    //             console.log('get colors err: ', err)
    //         })
    //         return () => {
    //             setFilteredColors([])
    //         }
    // }, [colorGroupIdAsName])

    return (
        <>
            <ColorSwatchGrid>
                {filteredColors.map(({ id, hex_code }) => {
                    return (
                        <ColorSwatchCardList 
                            key={id}
                            hexCode={hex_code} 
                        />
                    )
                })}
            </ColorSwatchGrid>

            <button 
                className='clear_btn' 
                onClick={() => history.push('/')}
            >
                Clear
            </button>
        </>
    )
}
