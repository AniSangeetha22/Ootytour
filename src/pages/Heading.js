import React from 'react'
import { Link } from 'react-router-dom'
import './Heading.css';

export default function Heading(){
  return (
   <header className="fixed w-full  bg-gray-100 z-50">
    <div className= "w-full p-2  flex flex-wrap justify-between md:items-center px-3 max-w-6xl mx-auto ">
        <div className=" flex-col items-start sm:items-center justify-items-start sm:justify-items-center ">
        <h1 className='font-bold text-3xl text-green-900 italic font-sans'>Ooty Tourisam</h1>
        <p className='text-right'>powered by HOLIDAYS </p>
        </div>
        <div className=' justify-items-start'>
          <p className=''>
          Travel is life. Couldn’t agree more? We not just discuss travel, We make it happen..
          </p>
          <p className='text-right'>...Team Holidays </p>
        </div>
        
        
        </div>
        <nav className=''>
          <ul className='flex items-center  bg-green-800 text-white p-3 font-bold'>
            <Link className="mr-4" to = "/">Home</Link>
            <Link className="mr-4" to = "/places-to-visit">Places to visit</Link>
            <Link className="mr-4" to = "/sign-in">Sign in</Link>
           
            
          </ul>
        </nav>

   </header>
  )
}
