import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { RxDotFilled } from 'react-icons/rx'

function Carousel() {
  const slides = [
        {
                url : "https://images.unsplash.com/photo-1596789457968-53acf2be0a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        },
        {
                url : "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
                url : "https://images.unsplash.com/photo-1587366871222-de49f73382b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
                url : "https://images.unsplash.com/photo-1625715490354-9a37e8298bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
  ]

  const [curr, setCurr] = useState(0)

  const nextImg = ()=>{
        curr === slides.length-1 ? setCurr(0) : setCurr(curr+1)
        console.log(curr)
  }

  const prevImg = ()=>{
        curr === 0 ? setCurr(slides.length-1) : setCurr(curr-1)
        console.log(curr)

  }

  const goToSlide = (idx)=>{
        setCurr(idx)
  }

//   setTimeout(()=>{
//         nextImg()
//   },3000)


  return (
    <div className='bg-lime-50 h-[calc(100vh-56px)] w-full m-auto p-2 relative group'>
        <div className='transition-opacity w-full h-full bg-center bg-cover duration-500 rounded-md'
                style={{backgroundImage: `url(${slides[curr].url})`}}>
        </div>

        {/* <div className='h-full w-full'>
                <img src={`${slides[curr].url}`} alt="im" className='transition-all duration-600'/>

        </div> */}

        <div className=' absolute inset-0 flex items-center justify-between p-5 cursor-pointer ease-in-out '>
                <div className='hidden group-hover:block  rounded-full p-3 bg-white/40 hover:bg-lime-700 transition-color duration-300 hover:text-white' onClick={()=>prevImg()}>
                        <ChevronLeft size={40}></ChevronLeft>
                </div>
                <div className='hidden group-hover:block rounded-full p-3 bg-white/40 hover:bg-lime-600 transition-color duration-300 hover:text-white' onClick={()=>nextImg()}>
                        <ChevronRight size={40}></ChevronRight>

                </div>
        </div>

        <div className='absolute bottom-8  inset-x-[50%] flex items-center justify-center'>
                {slides.map((slide, idx)=>(
                        <div className='cursor-pointer text-white'
                                key={idx}
                                onClick={()=>goToSlide(idx)}
                        ><RxDotFilled size={30} className={`${curr === idx ? 'opacity-100 transition-opacity' : 'opacity-60'}`}></RxDotFilled></div>
                ))}
        </div>
    </div>
  )
}

export default Carousel
