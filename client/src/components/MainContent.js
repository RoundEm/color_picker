import React, { useContext } from 'react'
import { PaginationContext } from '../App'
import './MainContent.css'
import ColorSwatchGrid from './ColorSwatchGrid'
import ColorSwatchListCard from './ColorSwatchListCard'

const dummyColors = [
    '800000',
    'A52A2A',
    'A0522D',   
    '8B4513',
    'D2691E',
    'CD853F',
    'DAA520',
    'F4A460',
    'BC8F8F',
    'D2B48C',
    'DEB887',
    'F5DEB3',
    'FFDEAD',
    'FFE4C4',
    'FFEBCD',
    'FFF8DC'
]

export default function MainContent() {
    const PaginationContextData = useContext(PaginationContext)
    console.log('PaginationContextData: ', PaginationContextData)
    return (
        <main>
            <ColorSwatchGrid>
                {dummyColors.map((color, i) => {
                    return (
                        <ColorSwatchListCard 
                            key={color}
                            colorCode={color}
                        />
                    )
                })}
        </ColorSwatchGrid>
        </main>
    )
}
