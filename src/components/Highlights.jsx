import React from 'react'
import {BsBoxSeamFill, BsAwardFill} from 'react-icons/bs'
import {BiSolidOffer} from 'react-icons/bi'
import {AiFillGift} from 'react-icons/ai'

function Highlights() {
  return (
    <div className='py-28 w-full bg-green-900 px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 sm:gap-6 items-center sm:flex-row'>
      <div className='flex flex-col items-center gap-3 justify-center sm:flex-row lg:justify-start'>
        <div className='p-6 bg-lime-500 rounded-full'>
                <BsBoxSeamFill size={30} className='text-white'></BsBoxSeamFill>
        </div>
        <div className='text-white'>
                <h1 className='text-lg font-bold text-center sm:text-start'>Free Shipping</h1>
                <h1 className='text-md text-center sm:text-start'>On orders above 299 in India.<br></br> Delivering worldwide!</h1>
        </div>
      </div>

      <div className='flex flex-col items-center gap-3 justify-center sm:flex-row lg:justify-start'>

        <div className='p-6 bg-lime-500 rounded-full'>
                <BsAwardFill size={30} className='text-white'></BsAwardFill>
        </div>
        <div className='text-white'>
                <h1 className='text-lg font-bold text-center sm:text-start'>High Quality</h1>
                <h1 className='text-md text-center sm:text-start'>Collect points and earn<br></br> rewards for your next order </h1>
        </div>
      </div>

      <div className='flex flex-col items-center gap-3 justify-center sm:flex-row lg:justify-start'>

        <div className='p-6 bg-lime-500 rounded-full'>
                <BiSolidOffer size={35} className='text-white'></BiSolidOffer>
        </div>
        <div className='text-white'>
                <h1 className='text-lg font-bold text-center sm:text-start'>Free Samples</h1>
                <h1 className='text-md text-center sm:text-start'>On orders above 299 in India.<br></br>Delivering worldwide!</h1>
        </div>
      </div>

      <div className='flex flex-col items-center gap-3 justify-center sm:flex-row lg:justify-start'>

        <div className='p-6 bg-lime-500 rounded-full'>
                <AiFillGift size={35} className='text-white'></AiFillGift>
        </div>
        <div className='text-white'>
                <h1 className='text-lg font-bold text-center sm:text-start'>Refer and Earn</h1>
                <h1 className='text-md text-center sm:text-start'>Give a gift of good health <br></br>and earn while you’re at it. </h1>
        </div>
      </div>

      

    </div>
  )
}

export default Highlights
