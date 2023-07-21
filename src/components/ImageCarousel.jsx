import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

function ImageCarousel() {
  const slides = [
        "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1625715490354-9a37e8298bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1587366871222-de49f73382b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1596789457968-53acf2be0a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
  ]

  const slides2 = [
        "https://assets.telegraphindia.com/telegraph/2022/May/1651867886_tea.jpg"
  ]

  const [curr, setCurr] = useState(0)

  const prev=()=>{
        setCurr(curr => curr === 0 ? slides.length-1 : curr-1)
  }

  const next=()=>{
        setCurr(curr => curr === slides.length-1 ? 0 : curr+1)
  }

  return (
    <div className='h-screen overflow-hidden relative w-auto'>
        <div className='flex min-h-full w-screen transition-transform ease-out duration-500'
                style={{transform: `translateX(-${curr*100}%)`}}
        >
                {slides.map((s)=>{
                return <img src={s} className='w-screen' alt="oi"/> 
                })}
        </div>

        <div className='absolute inset-0 flex items-center justify-between text-white p-4'>
                <button className='p-1 rounded-full shadow-md' onClick={()=>prev()}>
                        <ChevronLeft size={40}></ChevronLeft>
                </button>
                <button className='p-1 rounded-full shadow-md' onClick={()=>next()}>
                        <ChevronRight size={40}></ChevronRight>
                </button>
        </div>

    </div>
  )
}

export default ImageCarousel
