import React from 'react'
import {BsWhatsapp, BsInstagram, BsFacebook, BsArrowUpCircle} from 'react-icons/bs'

function Footer() {
  const backToTop = ()=>{
    window.scrollTo({top:0 , behavior: "smooth"})
  }
  
  return (
    <div>
      <div className='grid text-center sm:grid-cols-2 lg:text-start lg:grid-cols-5 sm:gap-3 gap-5 px-7 py-16  '>    
        <div>LOGO</div>
        <div className='flex flex-col mb-7 sm:mb-2'>
          <h1 className='font-bold mb-5 text-sm text-gray-500'>ABOUT</h1>
          <ul className='flex flex-col gap-2 text-md'>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Company</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>FAQ's</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Quality</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Gift Cards</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Contact</li>
          </ul>

        </div>
        <div className='flex flex-col mb-7 sm:mb-2'>
          <h1 className='font-bold mb-5 text-sm text-gray-500'>SHOP</h1>
          <ul className='flex flex-col gap-2 text-md'>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Black Tea</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Red Tea</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Green Tea</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Herbal Tea</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Tea Bags</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Iced Tea</li>
          </ul>

        </div>
        <div className='flex flex-col mb-7 sm:mb-2'>
          <h1 className='font-bold mb-5 text-sm text-gray-500'>HELP CENTER</h1>
          <ul className='flex flex-col gap-2 text-md'>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Terms & Conditions</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Return & Refunds</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Delivery Policy</li>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Privacy Policty</li>
          </ul>

        </div>

        <div className='flex flex-col mb-7 sm:mb-2'>
          <h1 className='font-bold mb-5 text-sm text-gray-500'>HELP CENTER</h1>
          <ul className='flex flex-col gap-2 text-md'>
                  <li className='hover:text-lime-500 transition-all duration-300 hover:cursor-pointer'>Balarampur Road, Dinhata, CoochBehar, PIN-736135</li>
                  <li>
                          <div className='flex flex-col mt-5'>
                                  <h1 className='font-medium  text-sm text-lime-500'>Need Help? Call Us</h1>
                                  <h1 className='font-medium  text-md text-lime-500'>+91 98902XXXX</h1>

                          </div>
                  </li>
          </ul>

        </div>
      </div>


      {/* Below Footer */}
      <div className='bg-gray-50 gap-4 md:gap-0 flex flex-col md:flex-row px-7 py-5'>
        <div className='basis-1/2 flex items-center justify-center md:justify-start'> 
          <h1>Copyright © 2023 <span className='text-lime-500'> Assam Kadak. </span> All rights reserved</h1>
        </div>

        <div className='basis-1/2 flex gap-3 justify-between md:justify-end cursor-pointer '>
          <div className='flex gap-2'>
            <div className='bg-white rounded-full p-3 group hover:bg-lime-500 transition duration-300'>
                <BsWhatsapp className='text-gray-400 group-hover:text-white transition duration-300'></BsWhatsapp>
            </div>
            <div className='bg-white rounded-full p-3 group hover:bg-lime-500 transition duration-300'>
                <BsInstagram className='text-gray-400 group-hover:text-white transition duration-300'></BsInstagram>
            </div>
            <div className='bg-white rounded-full p-3 group hover:bg-lime-500 transition duration-300'>
                <BsFacebook className='text-gray-400 group-hover:text-white transition duration-300'></BsFacebook>
            </div>
          </div>



          <div className='flex justify-center items-center gap-3 ml-3 whitespace-nowrap' onClick={()=>backToTop()}>
            <h1 className='text-gray-500 text-sm'>Back To Top</h1>
            <BsArrowUpCircle className='text-gray-400 group-hover:text-white transition duration-300'></BsArrowUpCircle>
          </div>


        </div>
      </div>


    </div>

  )
}

export default Footer
