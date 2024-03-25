import React from 'react'
import { GiGymBag } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black text-white flex p-4 items-center justify-center'>
    <div className='flex flex-col items-center justify-center' >
    <Link to="/" className="flex  items-center">
              <GiGymBag className="text-fuchsia-400 w-10 h-8" />
              <span className="ml-2">GYMBOO</span>
            </Link>
            <p className='hover:text-fuchsia-400 mt-2 text-md'>Made By Karthikeyan S &copy; 2024</p>
    </div>
    
  </div>
  )
}

export default Footer