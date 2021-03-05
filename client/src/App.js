import React, { useState, useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import axios from 'axios'
import Router from './components/Router'
import Header from './components/Header'
import ContentGrid from './components/LayoutGrid'
import ColorGroupNav from './components/ColorGroupNav'

const PaginationContext = React.createContext({})

function App() {
    // TODO: I'm just using hard-coded array to set color groups for nav bar but should I fetch them instead? If so the commented out useEffect code below works but probably needs a loader.
  const [colorGroups, setColorGroups] = useState([
    { name: 'red', id: 1 },
    { name: 'orange', id: 2 },
    { name: 'yellow', id: 3 },
    { name: 'green', id: 4 },
    { name: 'blue', id: 5 },
    { name: 'purple', id: 6 },
    { name: 'brown', id: 7 },
    { name: 'gray', id: 8 },
  ])
  const [allColors, setAllColors] = useState([])
  const [paginatedColors, setPaginatedColors] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 16

  // useEffect(() => {
  //   axios.get('/color_groups')
  //     .then((res) => {
  //       // console.log('get colors res: ', res)
  //       setColorGroups(res.data)
  //     })
  //     .catch((err) => {
  //       console.log('get colors err: ', err)
  //     })
  // }, [])

  useEffect(() => {
    axios.get('/colors')
      .then((res) => {
        setAllColors(res.data)

        // TODO: figure out what was going awry here and then remove 
        // setTotalPages(Math.ceil(res.data.length / itemsPerPage))
        // setPaginatedColors(res.data.slice(
        //   currentPage, 
        //   currentPage + itemsPerPage
        // ))
      })
      .catch((err) => {
        console.log('get colors err: ', err)
      })
  }, [])

  useEffect(() => {
    setTotalPages(Math.ceil(allColors.length / itemsPerPage))
    setPaginatedColors(allColors.slice(
      currentPage, 
      currentPage + itemsPerPage
    ))
  }, [allColors])

  return (
    <div>
      <PaginationContext.Provider value={{ 
        allColors,
        paginatedColors,
        setPaginatedColors,
        itemsPerPage,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
      }}>
        <BrowserRouter>
          <Header />
          <ContentGrid>
            <ColorGroupNav 
              allColors={allColors}
              colorGroups={colorGroups} 
            />
            <Router 
              allColors={allColors}
              totalPages={totalPages}
            />
          </ContentGrid>

        </BrowserRouter>
      </PaginationContext.Provider>
    </div>
  )
}

export {
  App as default, 
  PaginationContext
}
