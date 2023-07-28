import React, { useState } from 'react'

export default function Subscribe() {
        
  const [email, setEmail] = useState("")

  const handleFormSubmit = (e)=>{
        e.preventDefault()
        if(email.toString().length > 0){
                alert(email)

        }
  }

  return (
    <div className='py-16 flex  flex-col items-center justify-center bg-leaf-pattern bg- bg-center relative'>
        <h1 className='mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold z-20'>Stay Updated on Discounts!</h1>
        <p className='mb-8 text-center z-20'>Sign up for 10% off and be the first to know about new products,<br></br> offers, and all the tea.</p>

        <div className='absolute inset-0 bg-white/70 backdrop-blur-sm z-10'></div>

        <div className='z-20 drop-shadow-sm'>   
                <form action='submit' onSubmit={(e)=>handleFormSubmit(e)} className=''>
                        <input className='px-9 py-3 sm:w-96 focus:outline-none rounded-tl-lg rounded-bl-lg' type="text" placeholder="Your email address" id="email-id" onChange={(e)=>setEmail(e.target.value)}/>
                        <button className='px-9 py-3  rounded-tr-lg rounded-br-lg text-white font-bold bg-lime-500 hover:bg-lime-600 transition duration-500' type='submit'>Subscribe</button>
                </form>
        </div>
    </div>
  )
}
