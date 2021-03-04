import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContentAllColors from './MainContentAllColors'
import MainContentFilteredColors from './MainContentFilteredColors'
import MainContentFocusedColor from './MainContentFocusedColor'

export default function Router({ allColors }) {
    return (
        <main>
            <Switch>
                <Route path='/color_group/:id'>
                    <MainContentFilteredColors />
                </Route>

                <Route path='/color/:id'>
                    <MainContentFocusedColor />
                </Route>

                <Route path='/'>
                    <MainContentAllColors allColors={allColors} />
                </Route>
            </Switch>
        </main>
    )
}