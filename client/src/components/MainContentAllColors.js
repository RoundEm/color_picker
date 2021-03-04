import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { PaginationContext } from '../App'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchListCard from './ColorSwatchListCard'

export default function MainContentAllColors() {
    // console.log('allColors: ', allColors)
    const { pathname } = useLocation()
    const pageNumber = pathname.slice(1)
    console.log('pageNumber: ', pageNumber)

    const {
        allColors,
        paginatedColors,
        setPaginatedColors,
        itemsPerPage,
    } = useContext(PaginationContext)

    useEffect(() => {
        console.log('-----useEffect-----')
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
        console.log('startIndex: ', startIndex)
        console.log('endIndex: ', endIndex)

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
                    <ColorSwatchListCard 
                        key={id}
                        id={id}
                        hexCode={hex_code}
                    />
                )
            })}
        </ColorSwatchGrid>
    )
}
