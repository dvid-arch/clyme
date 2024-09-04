import { useEffect, useState } from 'react'
import clymelogo from '../assets/clymelogo.png'
import { NavLink } from 'react-router-dom';
import Donate from '../pages/Donate/Donate';



function Navbar({ shadow }) {

  const [mnavopen, setMnavopen] = useState(false);
  const [sup, setSup] = useState(false)


  function handleClick() {
    if (mnavopen) {
      setMnavopen(false);
    } else {
      setMnavopen(true);

    }
  }

  function handleSup() {
    if (sup) {
      setSup(false)
    }
    setSup(true)
  }
  return (
    <nav className='flex justify-between items-center gap-8 py-2 px-6 sticky top-0'>
      <div className={`logo  flex flex-col items-center w-16 transition-all ${shadow && 'scale-75'}`}>
        <img src={clymelogo} alt="" className='block' />
        <div className={`font-bold uppercase text-[21px] tracking-wider`}>Clyme</div>
      </div>
      <div className={`justify-between text-[18px] flex-1 max-w-[80ch] text-slate-600  hidden md:flex px-10 ${shadow && 'scale-90'}`}>
        <NavLink to={'/about'} className='font-semibold uppercase '>About</NavLink>

        <NavLink to={'/projects'} className='font-semibold uppercase '>Projects</NavLink>

        <div className=''>
          <span onClick={ handleSup} className='font-semibold uppercase relative'>Support Clyme</span>
          <div className={` ${sup ? 'flex' : 'hidden'} flex-col absolute py-8 px-4 bg-white backdrop:blur-md border-teal-100 border-[2px] shadow-md min-w-60 top-[100%]`}>
            <NavLink onClick={() => setSup(false)} to={'/donate'} className='font-semibold  capitalize '>donate</NavLink>
            <NavLink onClick={() => setSup(false)} to={'/partner'} className='font-semibold  capitalize '>partner</NavLink>
            <NavLink onClick={() => setSup(false)} to={'/volunteer'} className='font-semibold  capitalize '>volunteer</NavLink>
          </div>
        </div>

        <NavLink to={'/blog'} className='font-semibold uppercase '>Blog</NavLink>
        <NavLink to={'/contact'} className='font-semibold uppercase '>Contact</NavLink>
      </div>
      <div className='hidden sm:block'>
        <button className='bg-brblue text-white  py-1 px-3 text-[21px] sm:hidden md:block'>Donate</button>
      </div>
      <div className='flex flex-col gap-1 border p-[2px] shadow md:hidden' onClick={handleClick}>
        <span className='w-8 h-1 bg-black block rounded-full'></span>
        <span className='w-8 h-1 bg-black block rounded-full'></span>
        <span className='w-8 h-1 bg-black block rounded-full'></span>
      </div>
      {mnavopen &&

        <div className='px-4 py-4 bg-cyan-600 absolute  top-[100%] left-0 w-full  text-white '>
          <div className='absolute h-screen w-screen -z-20 left-0 bg-black opacity-15 top-0' onClick={() => setMnavopen(false)}></div>
          <ul className='text-[18px] flex flex-col gap-2'>
            <NavLink to={'/about'} className='font-semibold capitalize underline underline-offset-4'>About</NavLink>
            <NavLink to={'/projects'} className='font-semibold capitalize  underline underline-offset-8'>Projects</NavLink>
            <NavLink to={'/donate'} className='font-semibold capitalize  underline underline-offset-8'>Support Clyme</NavLink>
            <NavLink to={'/blog'} className='font-semibold capitalize  underline underline-offset-8'>Blog</NavLink>
            <NavLink to={'/contact'} className='font-semibold capitalize  underline underline-offset-8'>Contact</NavLink>

          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar