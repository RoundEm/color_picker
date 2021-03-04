import React, { useContext } from 'react'
// import { PaginationContext } from '../App'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchListCard from './ColorSwatchListCard'

// TODO: change name to MainContentAllColors
export default function MainContent({ allColors }) {
    // const PaginationContextData = useContext(PaginationContext)
    // console.log('PaginationContextData: ', PaginationContextData)
    return (
        <main>
            <ColorSwatchGrid>
                {allColors.map(color => {
                    return (
                        <ColorSwatchListCard 
                            key={color.id}
                            colorCode={color.hex_code}
                        />
                    )
                })}
            </ColorSwatchGrid>
        </main>
    )
}
