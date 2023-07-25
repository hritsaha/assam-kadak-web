import React from 'react'
import CategoryCard from './CategoryCard'

function Categories() {
  const bgs = [
    {subTitle:"REFRESHING",title:"BLACK TEA",url:"https://unsplash.com/photos/25WodIbx90U/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMTkzODc1fA&force=true&w=1920"},
    {subTitle:"CAFFEINE FREE",title:"HERBAL TEA",url:"https://unsplash.com/photos/OVlFXzeAoqQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHRlYSUyMHBvdHxlbnwwfHx8fDE2ODk5NTU5MTV8MA&force=true&w=1920"},
    {subTitle:"ANTIOXIDANT RICH ",title:"GREEN TEA",url:"https://unsplash.com/photos/9T5FvfnmH_k/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8R3JlZW4lMjB0ZWF8ZW58MHx8fHwxNjkwMTkyMzk2fDA&force=true&w=1920"},
  ]

  return (
    <div className='p-2 h-auto flex flex-col gap-4 md:flex-row px-7'>
      {bgs.map((item)=>{
        return <CategoryCard subTitle={item.subTitle} title={item.title} img={item.url}></CategoryCard>
      })}
    </div>
  )
}

export default Categories
