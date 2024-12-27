import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='flex items-center justify-between mx-auto max-w-[1200px] px-5  lg:pt-5 lg:px-0'>
        <Logo />
        <Navbar/>
    </div>
  )
}

export default Header