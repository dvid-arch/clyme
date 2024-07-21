import { useState } from 'react'
import clymelogo from '../assets/clymelogo.png'


function Navbar() {
  const [mnavopen, setMnavopen] = useState(false);

  function handleClick(){
    if(mnavopen){
      setMnavopen(false);
    } else{
      setMnavopen(true);

    }
  }
  return (
    <nav className='flex justify-between items-center gap-8 py-4 px-6 sticky top-0'>
        <div className="logo w-16">
            <img src={clymelogo} alt="" className='block'/>
            <div className='font-bold uppercase text-xl tracking-wider'>Clyme</div>
        </div>
        <div className=' justify-between stext-[21px] flex-1 max-w-[600px] hidden md:flex px-10'>
            <a href='#' className='uppercase font-medium'>Contact</a>
            <a href='#' className='uppercase font-medium'>Services</a>
            <a href='#' className='uppercase font-medium'>About</a>
            <a href='#' className='uppercase font-medium'>Support</a>
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
          <ul>
            <li className='text-[21px]'>About</li>
            <li className='text-[21px]'>Contact</li>
            <li className='text-[21px]'>Projects</li>
            <li className='text-[21px]'>Support</li>
            
          </ul>
        </div>
        }
    </nav>
  )
}

export default Navbar