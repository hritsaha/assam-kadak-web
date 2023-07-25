import React from 'react'
import imsg from '../images/face.jpg'
import imsg2 from '../images/leaf.jpg'

function SingleProduct() {
  return (
    <div className='h-auto w-72 bg-gray-100 relative rounded-lg overflow-hidden cursor-pointer group'>
      <img src={imsg2} alt="" className='h-80 rounded-lg z-10  group-hover:scale-110 transition duration-1000 ease-in'/>
      <img src={imsg} alt="" className='absolute inset-0 h-80 rounded-lg z-0 group-hover:opacity-0 transition duration-700'/>
      <div className='p-5'>
        <h1 className='text-lg font-bold'>Chamomile Tea</h1>
        <h1>₹ 450</h1>
      </div>

    </div>
  )
}


export default SingleProduct
