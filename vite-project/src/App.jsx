import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import { Routes, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import ProfileUpdate from './Components/ProfileUpdate'
import Galary from './Components/Galary'
import Footer from './Components/Footer'
function App() {


  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={< SignUp />}></Route>
        <Route path="/Profile" element={< Profile />}></Route>
        <Route path="/ProfileUpdate" element={< ProfileUpdate />}></Route>
        <Route path="/Galary" element={< Galary />}></Route>

      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
