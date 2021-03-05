import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { PaginationContext } from '../App'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchCardList from './ColorSwatchCardList'

// TODO: how to get updated page colors to show when user manually adds page number to URL
// TODO: scrollToTop when new page is selected
export default function MainContentAllColors() {
    const { pathname } = useLocation()
    const pageNumber = pathname.slice(1)

    const {
        allColors,
        paginatedColors,
        setPaginatedColors,
        itemsPerPage,
    } = useContext(PaginationContext)

    useEffect(() => {
        // console.log('-----useEffect-----')
        const allColorsCopy = [...allColors]
        let startIndex
        let endIndex
        if (pageNumber === '' || pageNumber === 1) {
            startIndex = 0
            endIndex = itemsPerPage
        } else {
            startIndex = (pageNumber - 1) * itemsPerPage
            endIndex = startIndex + itemsPerPage
        }
        // console.log('startIndex: ', startIndex)
        // console.log('endIndex: ', endIndex)

        setPaginatedColors(
            allColorsCopy.slice(
                startIndex,
                endIndex
            )
        )
    }, [pageNumber])
    
    return (
        <ColorSwatchGrid>
            {paginatedColors.map(({ id, hex_code }) => {
                return (
                    <ColorSwatchCardList 
                        key={id}
                        id={id}
                        hexCode={hex_code}
                    />
                )
            })}
        </ColorSwatchGrid>
    )
}
