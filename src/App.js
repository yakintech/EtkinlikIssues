import React from 'react'
import SiteHeader from './components/SiteHeader'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ActivityDetail from './pages/AcitvityDetail'

function App() {
  return <>
    <SiteHeader/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/category/:categoryId" element={<CategoryPage/>} />
      <Route path="/activity/:etkinlikId" element={<ActivityDetail/>} />
    </Routes>
    <footer style={{textAlign:'center', padding:20, backgroundColor:'black', color:'white'}}>Footer</footer>
  </>
}

export default App