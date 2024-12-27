import React from 'react'
import { links } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex-1   w-full flex justify-end items-center'>
      <div className='hidden lg:flex items-center justify-center gap-20 text-gray-800 '>
        {
              links.map( link =>(
                  <Link key={link.path} href={link.path} className='border-b-2 border-transparent hover:border-gray-800 transition-all'>
                      {link.title}
                  </Link>
              ))
        }
      </div>

        <Image src="ellipsis.svg" width={30}height={30} alt='menu-icon' className='lg:hidden'/>
    </nav>
  )
}

export default Navbar