import React, { useEffect, useState } from 'react'
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

  useEffect(()=>{
    menu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  },[menu])



  return (
    <div className={``}>
      <div className='h-24 bg-gray-100 flex items-center justify-between px-4 drop-shadow-md positio'>
        <RxHamburgerMenu onClick={()=>handleMenu()} className='sm:hidden text-[2rem] hover:cursor-pointer'></RxHamburgerMenu>
        
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


      {
        <div className={`${menu ? 'absolute h-full w-full top-0 left-0' : 'absolute h-full top-0 left-[-100%] overflow-hidden'} lg:hidden `}>
          <div className={`z-30 bg-lime-700 h-screen   ${menu ? 'absolute top-0 left-0 transition-all duration-500 ease-in-out' : 'left-[-100%]'} bottom-0 w-4/5 text-white p-10`}>
            <div className='flex justify-between'>
              <h1 className='font-bold text-2xl mb-8 h-full'>Options:</h1>
              <GiCancel onClick={()=>{handleMenu()}} className='font-bold text-2xl text-red-500 hover:cursor-pointer'></GiCancel>
            </div>
            
            <ul>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>Home</li>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>Shop</li>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>About</li>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'>Contact</li>
            </ul>
          </div>

          <div className={`z-10 opacity-40  bg-black h-screen absolute top-0 ${menu ? 'left-0' : 'left-[-100%]'} bottom-0 w-full text-white p-10`}>
          </div>
        </div>
      }
    </div>
    
  )
}

export default Navbar
