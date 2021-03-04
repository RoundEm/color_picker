import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { PaginationContext } from '../App'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchListCard from './ColorSwatchListCard'

export default function MainContentAllColors({ allColors }) {
    console.log('allColors: ', allColors)
    const { pathname } = useLocation()
    console.log('pathname: ', pathname)
    const PaginationObject = useContext(PaginationContext)
    console.log('PaginationObject: ', PaginationObject)

    return (
        <ColorSwatchGrid>
            {PaginationObject.paginatedColors.map(({ id, hex_code }) => {
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
