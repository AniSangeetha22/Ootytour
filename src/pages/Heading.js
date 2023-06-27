import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading(){
  return (
   <header className="fixed w-full  bg-gray-100 z-50">
    <div className= "w-full p-2 flex justify-between px-3 max-w-6xl mx-auto ">
        <div className=" flex-col items-start justify-items-start ">
        <h1 className='font-bold'>Ooty Tourisam</h1>
        <quote className=''>powered by HOLIDAYS </quote>
        </div>
        <div className=' justify-items-start'>
          <p className=''>
          Travel is life. Couldn’t agree more? We not just discuss travel, We make it happen..
          </p>
          <blockquote className='text-center'>...Team Holidays </blockquote>
        </div>
        
        
        </div>
        <nav>
          <ul className='flex items-center  bg-blue-900 text-white p-3 font-bold'>
            <Link className="mr-4" to = "/">Home</Link>
            <Link className="mr-4" to = "/places-to-visit">Places to visit</Link>
            <Link className="mr-4" to = "/sign-in">Sign in</Link>
           
            
          </ul>
        </nav>

   </header>
  )
}
