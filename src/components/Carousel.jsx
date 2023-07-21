import React from 'react'

function Carousel() {
  const slides = [
        {
                url : 'https://unsplash.com/photos/eOpewngf68w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHx8fDE2ODk4OTMwMTZ8MA&force=true&w=1920'
        }
  ]

  return (
    <div className='bg-gray-400 h-[calc(100vh-56px)] w-full m-auto p-2'>
        <div className='w-full h-full bg-center bg-cover duration-500 rounded-md'
                style={{backgroundImage: `url(${slides[0].url})`}}>
        </div>
    </div>
  )
}

export default Carousel
