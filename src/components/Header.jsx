import React from 'react'
import logo from '../assets/clymelogo.png'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='sticky top-0 z-40 bg-[#f6fff9]'>
        <div className="prompt bg-teal-500 py-2 px-8 hidden">
            Hey!, it's 3 days to our major event of the year, learn more
        </div>
        <Navbar/>
    </header>
  )
}

export default Header