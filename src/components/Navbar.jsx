import { useState } from 'react'
import clymelogo from '../assets/clymelogo.png'
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [mnavopen, setMnavopen] = useState(false);

  function handleClick() {
    if (mnavopen) {
      setMnavopen(false);
    } else {
      setMnavopen(true);

    }
  }
  return (
    <nav className='flex justify-between items-center gap-8 py-4 px-6 sticky top-0'>
      <div className="logo w-16 flex flex-col items-center">
        <img src={clymelogo} alt="" className='block' />
        <div className='font-bold uppercase text-[21px]  tracking-wider'>Clyme</div>
      </div>
      <div className=' justify-between text-[18px] flex-1 max-w-[80ch] text-slate-600  hidden md:flex px-10'>
        <NavLink to={'/about'} className='font-semibold uppercase '>About</NavLink>
        <NavLink to={'/projects'} className='font-semibold uppercase '>Projects</NavLink>
        <NavLink to={'/donate'} className='font-semibold uppercase '>Support Clyme</NavLink>
        <NavLink to={'/blog'} className='font-semibold uppercase '>Blog</NavLink>
        <NavLink to={'/contact'} className='font-semibold uppercase '>Contact</NavLink>
      </div>
      <div className='hidden sm:block'>
        <button className='bg-cyan-300 py-1 px-3 text-[21px] sm:hidden md:block'>Act Now</button>
      </div>
      <div className='flex flex-col gap-1 border p-[2px] shadow md:hidden' onClick={handleClick}>
        <span className='w-8 h-1 bg-black block rounded-full'></span>
        <span className='w-8 h-1 bg-black block rounded-full'></span>
        <span className='w-8 h-1 bg-black block rounded-full'></span>
      </div>
      {mnavopen &&

        <div className='p-8 absolute top-[100%] left-0 w-full bg-cyan-700 text-white'>
          <ul className='text-[21px] flex flex-col'>
            <NavLink to={'/about'} className='capitalize '>Projects</NavLink>
            <NavLink to={'/donate'} className='capitalize '>Support Clyme</NavLink>
            <NavLink to={'/blog'} className='capitalize '>Blog</NavLink>
            <NavLink to={'/contact'} className='capitalize '>Contact</NavLink>

          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar