import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import AddRecipe from './components/AddRecipe'
import Home from './components/Home'
import Saved from './components/Saved'
import Profile from './components/Profile'
import Detail from './components/Detail'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Add' element={<AddRecipe/>}/>
        <Route path='/Saved' element={<Saved/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/:id' element={<Detail/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App