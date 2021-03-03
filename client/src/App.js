import React, { useState } from 'react'
import Header from './components/Header'
import ContentGrid from './components/LayoutGrid'
import SidebarNav from './components/SidebarNav'
import MainContent from './components/MainContent'

const PaginationContext = React.createContext({})
const itemsPerPage = 16

const colorsData = []
const PaginationData = {
  colors: colorsData,
  totalPages: Math.ceil(colorsData.length / itemsPerPage),
  currentPage: 0,
  setPageNumber: () => {}
}
// console.log('totalPages: ', totalPages)
// console.log('currentPage: ', currentPage)

function App() {
  return (
    <div>
      <PaginationContext.Provider value={PaginationData}>
        <Header />
        <ContentGrid>
          <SidebarNav />
          <MainContent />
        </ContentGrid>
      </PaginationContext.Provider>
    </div>
  )
}

export {
  App as default, 
  PaginationContext
}
