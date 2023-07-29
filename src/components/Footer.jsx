import React from 'react'

function Footer() {
  return (
    <div className='grid text-center sm:grid-cols-2 lg:text-start lg:grid-cols-5 sm:gap-3 gap-5 px-7 py-16 '>    
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
  )
}

export default Footer
