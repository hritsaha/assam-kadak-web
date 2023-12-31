import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';
import icon from '../images/ICO.png'

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
      <div className=' bg-white flex items-center justify-between px-7 drop-shadow-md positio'>
        <RxHamburgerMenu onClick={()=>handleMenu()} className='sm:hidden text-[2rem] hover:cursor-pointer'></RxHamburgerMenu>
        
        {/* <div className='w-full flex justify-center sm:justify-start'>
          <h1 className='font-bold text-2xl'><Link to='/'>Navbar</Link></h1>
        </div>
        
        <div className={`hidden sm:block sm:flex sm:gap-8 lg:items-center`}>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'><Link  to="/">Home</Link></h3>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'><Link  to="/shop">Shop</Link></h3>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'><Link  to="/about">About</Link></h3>
            <h3 className='text-xl cursor-pointer hover:underline underline-offset-2'><Link  to="/contact">Contact</Link></h3>
        </div> */}


        <div className='w-full flex flex-col justify-center items-center'>
          <div className='flex items-center'>
            <img src={icon} className='h-10 w-10 text-center' alt="ico" />
            <h1 className='font-bold text-2xl py-4'><Link to='/'>Assam Kadak</Link></h1>
          </div>

          <div className='h-px bg-gray-200 w-full rounded-full'></div>

          <div className={`hidden sm:block sm:flex sm:gap-8 lg:items-center py-3`}>
            <h3 className='text-lg cursor-pointer link link-underline link-underline-black'><Link  to="/">Home</Link></h3>
            <h3 className='text-lg cursor-pointer link link-underline link-underline-black'><Link  to="/shop">Shop</Link></h3>
            <h3 className='text-lg cursor-pointer link link-underline link-underline-black'><Link  to="/about">About</Link></h3>
            <h3 className='text-lg cursor-pointer link link-underline link-underline-black'><Link  to="/contact">Contact</Link></h3>
          </div>
        </div>
        

        
      </div>


      {
        <div className={`${menu ? 'absolute h-full w-full top-0 left-0' : 'absolute h-full top-0 left-[-100%] overflow-hidden'} lg:hidden `}>
          <div className={`z-30 bg-gray-100 text-black h-screen   ${menu ? 'absolute top-0 left-0 transition-all duration-500 ease-in-out' : 'left-[-100%]'} bottom-0 w-4/5 text-black p-10`}>
            <div className='flex justify-between'>
              <h1 className='font-bold text-2xl mb-8 h-full'>Options:</h1>
              <GiCancel onClick={()=>{handleMenu()}} className='font-bold text-2xl text-red-500 hover:cursor-pointer'></GiCancel>
            </div>
            
            <ul>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'><Link  to="/">Home</Link></li>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'><Link  to="/shop">Shop</Link></li>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'><Link  to="/about">About</Link></li>
              <li className='text-xl mb-6 cursor-pointer hover:underline underline-offset-2'><Link  to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={`z-10 opacity-40  bg-black h-screen transition absolute top-0 ${menu ? 'left-0' : 'left-[-100%]'} bottom-0 w-full text-white p-10`}>
          </div>
        </div>
      }
    </div>
    
  )
}

export default Navbar
