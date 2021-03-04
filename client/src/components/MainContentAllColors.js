import React, { useContext } from 'react'
// import { PaginationContext } from '../App'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchListCard from './ColorSwatchListCard'

export default function MainContentAllColors({ allColors }) {
    // const PaginationContextData = useContext(PaginationContext)
    // console.log('PaginationContextData: ', PaginationContextData)
    return (
        <ColorSwatchGrid>
            {allColors.map(({ id, hex_code }) => {
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
