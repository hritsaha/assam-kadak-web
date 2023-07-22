import React from 'react'
import { ArrowRight } from 'react-feather'


function CategoryCard() {
  return (
    <div className='h-64 w-full overflow-hidden rounded-lg bg-black relative group'
    >

      <div className='absolute inset-0 p-6 z-10' >
            <p>CAFFEINE FREE</p>
            <h1 className='text-4xl font-bold mt-3 mb-3'>Herbal Teas</h1>
            <div className='flex gap-2 items-center hover:cursor-pointer'>
                    <p className='font-bold text-md underline'>Shop Now</p>
                    <ArrowRight size={18}></ArrowRight>
            </div>
      </div>

        <img src="https://unsplash.com/photos/OVlFXzeAoqQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHRlYSUyMHBvdHxlbnwwfHx8fDE2ODk5NTU5MTV8MA&force=true&w=1920" alt="" 
        className='rounded-lg group-hover:scale-110 transition-all duration-500'/>


    </div>
  )
}

export default CategoryCard
