import React from 'react'
import Hero from '../Hero'
import ProductCarousel from '../ProductCarousel'
import Poster from '../Poster'
import Collection from '../Collection'
import Highlights from '../Highlights'
import CustomerReviewSection from '../CustomerReviewSection'
import Subscribe from '../Subscribe'

function Home() {
  return (
    <div>
      <Hero></Hero>
      {/* <Categories></Categories> */}
      <ProductCarousel></ProductCarousel>
      <Poster></Poster>
      <Collection></Collection>
      <Highlights></Highlights>

      <CustomerReviewSection></CustomerReviewSection>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home
