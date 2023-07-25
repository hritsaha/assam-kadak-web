import React, { useState } from 'react'
import { ArrowRight , ChevronLeft, ChevronRight } from 'react-feather'
import SingleProduct from './SingleProduct'


export default function ProductCarousel() {
  const [curr, setCurr] = useState(0)

  const next = ()=>{
    curr == 3 ? setCurr(0): setCurr(curr+1)
  }

  const prev = ()=>{
    curr == 0 ? setCurr(3): setCurr(curr-1)
  }

  return (
    <div className='bg-white flex overflow-hidden'>

      <div className='flex flex-col basis-2/5 px-7 py-10 z-50 bg-white'>
        <h1 className='text-6xl font-bold'>Explore Our Seasonal <br/>Favourites</h1>
        <div className='flex gap-2 items-center mt-6 hover:cursor-pointer'>
                    <p className='font-bold text-md underline'>Shop Now</p>
                    <ArrowRight size={18}></ArrowRight>
        </div>

        <div className='flex gap-3 mt-16'>
                <div className='cursor-pointer rounded-full p-3 bg-gray-100 hover:bg-lime-600 transition-color duration-300 hover:text-white'>
                        <ChevronLeft size={30} onClick={()=>prev()} ></ChevronLeft>
                </div>
                <div className='cursor-pointer rounded-full p-3 bg-gray-100 hover:bg-lime-600 transition-color duration-300 hover:text-white'>
                        <ChevronRight size={30} onClick={()=>next()}></ChevronRight>

                </div>
        </div>
      </div>

      <div className='flex items-center basis-3/5 bg-white px-4 py-5'>
              <div className='flex gap-4 transition duration-500' style={{transform: `translateX(-${curr*17}%)`}}>
                {Array(6).fill(1).map((it)=>{
                  return <SingleProduct></SingleProduct>
                })}
              </div>

      </div>

    </div>
  )
}
