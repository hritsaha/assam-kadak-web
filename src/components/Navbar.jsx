import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";

function Navbar() {
  const [menu, setMenu]= useState(false)

  const handleMenu = ()=>{
    if(menu){
      setMenu(false)
    }else{
      setMenu(true)
    }
  }


  return (
    <div className='relative'>
      <div className='h-24 bg-gray-100 flex items-center justify-between px-5 drop-shadow-md'>
        <RxHamburgerMenu onClick={()=>handleMenu()} className='sm:hidden text-3xl hover:cursor-pointer'></RxHamburgerMenu>
        
        <div className='w-full flex justify-center sm:justify-start'>
          <h1 className='font-bold text-2xl'>Navbar</h1>
        </div>
        
        <div className={`hidden sm:block sm:flex sm:gap-8 lg:items-center`}>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'>Home</h3>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'>Shop</h3>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'>About</h3>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'>Contact</h3>
        </div>
        
      </div>

      {menu && 
        <div className='lg:hidden'>
          <div className='z-30 bg-gray-800 h-screen absolute top-0 left-0 bottom-0 w-4/5 text-white p-10'>
            <div className='flex justify-between'>
              <h1 className='font-bold text-2xl mb-8 h-full'>Options:</h1>
              <GiCancel onClick={()=>{handleMenu()}} className='font-bold text-2xl text-red-500 hover:cursor-pointer'></GiCancel>
            </div>
            
            <h3 className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>Home</h3>
            <h3 className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>Shop</h3>
            <h3 className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>About</h3>
            <h3 className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>Contact</h3>
          </div>

          <div className='z-10 opacity-40  bg-black h-screen absolute top-0 left-0 bottom-0 w-full text-white p-10'>
          </div>
        </div>
      }
    </div>
    
  )
}

export default Navbar
