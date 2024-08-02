import { useState } from 'react'
import clymelogo from '../assets/clymelogo.png'
import { NavLink } from 'react-router-dom';



function Navbar() {
  const [mnavopen, setMnavopen] = useState(false);

  window.addEventListener('scroll', ()=>{
    setMnavopen(false)
  })
  function handleClick() {
    if (mnavopen) {
      setMnavopen(false);
    } else {
      setMnavopen(true);

    }
  }
  return (
    <nav className='flex justify-between items-center gap-8 py-2 px-6 sticky top-0'>
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

        <div className='px-4 py-4 bg-cyan-600 absolute  top-[100%] left-0 w-full  text-white '>
          <div className='absolute h-screen w-screen -z-20 left-0 bg-black opacity-15 top-0' onClick={()=>setMnavopen(false)}></div>
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