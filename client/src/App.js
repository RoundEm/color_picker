import React, { useState, useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import axios from 'axios'
import Router from './components/Router'
import Header from './components/Header'
import ContentGrid from './components/LayoutGrid'
import SidebarNav from './components/SidebarNav'

const PaginationContext = React.createContext({})

function App() {
  // TODO: use fetch instead? Either way change IDs of colors to be same order as mockup (e.g. red, orange, yello, etc.)
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
  // TODO: should i be using react router here instead of window.location below?
  // const { pathname } = useLocation()
  // console.log('pathname: ', pathname)
  console.log('paginatedColors from App: ', paginatedColors)
  console.log('totalPages: ', totalPages)

  // TODO: I'm just using hard-coded array to set color groups but should I fetch them instead? If so this should work:
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
        console.log('get colors res: ', res)
        setAllColors(res.data)
        setTotalPages(Math.ceil(res.data.length / itemsPerPage))
        setPaginatedColors(res.data.slice(
          currentPage, 
          currentPage + itemsPerPage
        ))
      })
      .catch((err) => {
        console.log('get colors err: ', err)
      })
  }, [])

  return (
    <div>
      <PaginationContext.Provider value={{ 
        allColors,
        paginatedColors,
        setPaginatedColors,
        // handleSetPaginatedColors,
        itemsPerPage,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
      }}>
        <BrowserRouter>
          <Header />
          <ContentGrid>
            <SidebarNav 
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
