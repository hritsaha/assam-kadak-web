import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import iii from '../images/poster_item.png'


function Poster() {
  return (
    <div className='px-7 w-full mt-14 mb-12'>
      <div className='bg-gradient-to-r from-gray-100 to-teal-100 h-auto p-10 rounded-lg shadow-sm flex flex-col md:flex-row'>

        <div className='basis-1/2'>
          <img src={iii} className='h-full w-full object-scale-down' alt="poster-img" />
        </div>

        <div className='basis-1/2 flex flex-col items-center justify-center gap-8'>
          <p className='text-lime-600'>FRESH FROM NATURE</p>
          <h1 className='md:max-lg:text-4xl text-5xl font-bold text-center text-green-900 whitespace-nowrap object-scale-down'>High-Quality Teas & <br></br>Botanicals</h1>
          <p className='text-center text-gray-500  md:max-lg:text-sm whitespace-nowrap'>Save 25% sitewide on beautifully packaged gift sets, tea<br></br> collections, and exquisite accessories Moms adore. </p>
          <button className='px-9 py-3 bg-white rounded-lg hover:bg-lime-500 transition duration-500 flex items-center gap-2 hover:text-white'>Shop Our Teas <AiOutlineRight className='font-bold'></AiOutlineRight></button>
        </div>

      </div>

    </div>
  )
}

export default Poster
