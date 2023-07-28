import React from 'react'
import CollectionCard from './CollectionCard'

function Collection() {

  const bgs = [
        {subTitle:"Refreshing",title:"Black Tea",url:"https://unsplash.com/photos/25WodIbx90U/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMTkzODc1fA&force=true&w=1920"},
        {subTitle:"Caffeine Free",title:"Herbal Tea",url:"https://unsplash.com/photos/OVlFXzeAoqQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHRlYSUyMHBvdHxlbnwwfHx8fDE2ODk5NTU5MTV8MA&force=true&w=1920"},
        {subTitle:"Antioxidant Rich",title:"Green Tea",url:"https://unsplash.com/photos/9T5FvfnmH_k/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8R3JlZW4lMjB0ZWF8ZW58MHx8fHwxNjkwMTkyMzk2fDA&force=true&w=1920"},
        ]


  return (
    <div  className='h-auto px-7 py-16 flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-3 mb-10'>
        <h1 className='font-bold text-4xl text-center'>Shop By Category</h1>
        <p>Wide variety of tea flavours to help your mood</p>
      </div>


      <div className='w-full h-auto flex flex-col gap-4 md:flex-row'>
                {bgs.map((item)=>{
                        return <CollectionCard subTitle={item.subTitle} title={item.title} img={item.url}></CollectionCard>
      })}
    </div>
      
    </div>
  )
}

export default Collection
