import React from 'react'
import { Link } from 'react-router-dom'
import './Pagination.css'

// TODO: set to not render until color data is rendered
export default function Pagination({ totalPages }) {
    // console.log('totalPages: ', totalPages)
    const pageNumbersArray = Array.from({ length: totalPages }, (_, i) => {
        const number = i + 1
        return number.toString()
    })

    return (
        <div id='pagination_container'>
            <ul>
                {pageNumbersArray.map(pageNumber => {
                    return (
                        <li key={pageNumber}>
                            <Link to={`/${pageNumber}`}>
                                {pageNumber}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}