import React, { useState } from 'react'
import './Header.css'
import Logo from '../logo-symbol.svg'

// TODO: make logo and search input smaller on smaller screens
export default function Header() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <header>
            <img src={Logo} alt='Helpful Human Company Logo' />
            
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
