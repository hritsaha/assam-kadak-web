import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Collection from './components/Collection'
import ProductCarousel from './components/ProductCarousel'
import Highlights from './components/Highlights'
import Subscribe from './components/Subscribe'
import Poster from './components/Poster'
import CustomerReviewSection from './components/CustomerReviewSection'
import CustomerReviewCard from './components/CustomerReviewCard'


function App() {
  
  return (
    <section className='font-inter'>
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <Categories></Categories> */}
      <ProductCarousel></ProductCarousel>
      <Poster></Poster>
      <Collection></Collection>
      <Highlights></Highlights>
      <Subscribe></Subscribe>

      <CustomerReviewSection></CustomerReviewSection>

      <CustomerReviewCard></CustomerReviewCard>
    </section>
  )
}

export default App
