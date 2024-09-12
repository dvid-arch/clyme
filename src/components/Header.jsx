import React, { useEffect, useState } from 'react'
import logo from '../assets/clymelogo.png'
import Navbar from './Navbar'

function Header() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={` transition-all sticky top-0 z-40 bg-[#f6fff9] ${shadow && 'shadow-lg'}`}>
      <div className='container mx-auto'>

        <div className="prompt bg-teal-500  px-8 hidden">
          Hey!, it's 3 days to our major event of the year, learn more
        </div>
        <Navbar shadow={shadow} />
      </div>
    </header>
  )
}

export default Header