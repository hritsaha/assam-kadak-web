import React from 'react'
import img from '../images/face.jpg'

function CollectionCard({subTitle, title, img}) {
//   return (
//     <div className='overflow-hidden h-96 w-full flex flex-col cursor-pointer relative group'>
//       <div className='bg-blue-300 w-full rounded-lg'>
//         <img src={img} className="rounded-lg" alt={title} />
//       </div>

      
//      <div className='bg-white p-5 z-10 w-full transition transition-all duration-500 shadow-lg rounded-br-lg rounded-bl-lg mt-[-10%] group-hover:mt-[-15%]'>
//         <h1 className='font-bold text-xl text-center'>{title}</h1>
//         <p className='text-center'>{subTitle}</p>
//       </div>
//     </div>
//   )

   return(
        <div className='h-96 w-full flex flex-col items-center cursor-pointer group'>
          <img src={img} className="object-cover rounded-lg h-3/4 w-full" alt={title} />

          <div className='bg-white w-3/4 p-4 rounded-lg mt-[-5%] shadow-md group-hover:mt-[-10%] transition-all duration-500'>
                <h1 className='font-bold text-xl text-center'>{title}</h1>
                <p className='text-center text-gray-500'>{subTitle}</p>
          </div>

        </div>
   )
}

export default CollectionCard
