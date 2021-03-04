import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContent from './MainContent'
import MainContentFilteredColors from './MainContentFilteredColors'

export default function Router({ allColors }) {
    return (
        <div>
            <Switch>
                <Route path='/color/:id'>
                    <MainContentFilteredColors />
                </Route>
                <Route path='/'>
                    <MainContent allColors={allColors} />
                </Route>
            </Switch>
        </div>
    )
}