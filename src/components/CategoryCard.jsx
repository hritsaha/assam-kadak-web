import React from 'react'
import { ArrowRight } from 'react-feather'


function CategoryCard({subTitle, title, img}) {
  return (
    <div className='mb-4 sm:mb-0 h-64 w-full overflow-hidden rounded-lg bg-black drop-shadow-md relative group'
    >

      <div className='absolute inset-0 p-6 z-10' >
            <p>{subTitle}</p>
            <h1 className='text-4xl font-bold mt-3 mb-3'>{title}</h1>
            <div className='flex gap-2 items-center hover:cursor-pointer'>
                    <p className='font-bold text-md underline'>Shop Now</p>
                    <ArrowRight size={18}></ArrowRight>
            </div>
      </div>

        <img src={img} alt="" 
        className='rounded-lg group-hover:scale-110 transition-all duration-500 sm:h-full sm:w-full'/>


    </div>
  )
}

export default CategoryCard
