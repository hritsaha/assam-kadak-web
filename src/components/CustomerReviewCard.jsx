import React from 'react'

function CustomerReviewCard({name, date, comment, url}) {
  return (
    <div className='rounded-lg border border-gray-300 flex flex-col gap-5 px-9 py-7 w-96 mb-6'>
      <h1 className='text-2xl text-yellow-500'>★★★★★</h1>
      <p className='text-[1.3rem] text-gray-700 w-96l'>{comment}</p>
      <div className='flex gap-5 w-full'>
        <img src={url} alt="user" className='h-12 w-12 rounded-full object-cover mt-4' />
        <div className='mt-4'>
                <h1 className='text-sm font-bold'>{name}</h1>
                <p className='text-lime-600 text-sm'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviewCard
