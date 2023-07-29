import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Shop from './components/pages/Shop'


function App() {
  
  return (
    <div className='font-inter'>
      <Navbar></Navbar>

      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </div>

      

      <Footer></Footer>

    </div>
  )
}

export default App
