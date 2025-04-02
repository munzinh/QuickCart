import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='fixed top-0 left-0 w-full flex items-center px-4 md:px-8 py-3 justify-between border-b bg-orange-600 shadow-md z-10'>
      <div 
          className="cursor-pointer text-2xl font-bold text-white" 
          onClick={() => router.push('/')}
        >
          My Store
        </div>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Đăng xuất</button>
    </div>
  )
}

export default Navbar