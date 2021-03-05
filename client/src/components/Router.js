import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContentAllColors from './MainContentAllColors'
import MainContentFilteredColors from './MainContentFilteredColors'
import MainContentFocusedColor from './MainContentFocusedColor'
import Pagination from './Pagination'

export default function Router({ 
    allColors,
    currentPage,
    itemsPerPage, 
    totalPages
}) {
    return (
        <main>
            <Switch>
                <Route path='/color_group/:id'>
                    <MainContentFilteredColors allColors={allColors} />
                </Route>

                <Route path='/color/:id'>
                    <MainContentFocusedColor />
                </Route>

                <Route path='/'>
                    <MainContentAllColors 
                        allColors={allColors} 
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                    />
                    
                    <Pagination 
                        totalPages={totalPages}
                    />
                </Route>
            </Switch>
        </main>
    )
}