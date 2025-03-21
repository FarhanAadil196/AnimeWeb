import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Fav from './Pages/Fav'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/fav' element={<Fav/>}/>
    </Routes>
  )
}

export default App
