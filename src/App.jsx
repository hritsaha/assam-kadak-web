import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCarousel from './components/ProductCarousel'
import Highlights from './components/Highlights'

function App() {
  
  return (
    <section>
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>
      <ProductCarousel></ProductCarousel>
      <Highlights></Highlights>
    </section>
  )
}

export default App
