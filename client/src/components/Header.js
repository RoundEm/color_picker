import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../logo-symbol.svg'

// TODO: make logo and search input smaller on smaller screens
export default function Header() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <header>
            <Link to='/'>
                <img src={Logo} alt='Helpful Human Company Logo' />
            </Link>
                <label 
                    htmlFor='search' 
                    className='hidden_label'
                >
                    Search
                </label>
                <input 
                    type='text'
                    name='search'
                    placeholder='Search'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
        </header>
    )
}
