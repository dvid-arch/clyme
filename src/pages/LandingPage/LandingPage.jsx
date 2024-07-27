import heroImg from '../../assets/heroImg.png'
import proj from '../../assets/proj.jpg'
import bgImg from '../../assets/bgImg.svg'


function LandingPage() {
  return (
    <div className='pt-10'>

      <div className='flex flex-col-reverse gap-8 sm:flex-row sm:items-center px-4 sm:px-8 relative  align-center'>
        <div className='flex-1 -mt-20 sm:mt-0 gradd py-10'>
          <h1 className='text-[40px] text-center sm:text-[64px] xl:text-[80px] font-bold leading-none mb-6 sm:text-left'>The time to save the planet is Now</h1>
          <p className='text-16px md:text-[18px] my-4 text-center sm:text-left text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti numquam eligendi, ea exercitationem quibusdam </p>
          <button className='px-4 py-1 text-[21px] bg-cyan-300 mx-auto block sm:mx-0'>Act Now</button>
        </div>
        <div className='  sm:h-auto hero-img sm:flex-1 flex align-bottom justify-center bg-center bg-contain bg-no-repeat' style={{ backgroundImage: `url(${bgImg})` }}><img src={heroImg} alt="" className=' w-1/2  sm:w-10/12 md:w-2/3 xl:w-1/2  h-auto block' /></div>
      </div>
      <section className='bg-teal-950 p-8'>
          <div className='flex justify-around gap-8 flex-wrap'>
            <p className='flex flex-col items-center'>
              <span className='block font-bold text-white text-[48px]'>100+</span>
              <span className='block font-bold text-white text-[21px] capitalize tracking-wider'>Volunteers</span>
            </p>
            <p className='flex flex-col items-center'>
              <span className='block font-bold text-white text-[48px]'>10+</span>
              <span className='block font-bold text-white text-[21px] capitalize tracking-wider'>Universities</span>
            </p>
            <p className='flex flex-col items-center'>
              <span className='block font-bold text-white text-[48px]'>3</span>
              <span className='block font-bold text-white text-[21px] capitalize tracking-wider'>Awards</span>
            </p>
            <p className='flex flex-col items-center '>
              <span className='block font-bold text-white text-[48px]'>100+</span>
              <span className='block font-bold text-white text-[21px] capitalize tracking-wider'>Volunteers</span>
            </p>
          </div>
      </section>
      <section>
        <div className="py-20 px-8 bg-teal-500">
          <div className="flex flex-col md:flex-row gap-8 text-center sm:text-left mb-4">

            <div className="flex-1 mx-auto sm:mx-0">
              <h2 className="text-4xl mb-4 font-bold"><span className='font-normal'>Our</span> Mission</h2>
              <p className="max-w-[400px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam praesentium odit libero doloremque quaerat, fugit explicabo debitis expedita similique quo voluptatum nam aperiam eius vitae aliquid beatae fugiat alias?</p>
            </div>
            <div className="flex-1 mx-auto sm:mx-0">
              <h2 className="text-4xl mb-4 font-bold"><span className='font-normal'>Our</span> Vision</h2>
              <p className="max-w-[400px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam praesentium odit libero doloremque quaerat, fugit explicabo debitis expedita similique quo voluptatum nam aperiam eius vitae aliquid beatae fugiat alias?</p>
            </div>
          </div>
          <button className='bg-white py-2 px-8 text-cyan-500 text-[21px] block rounded-md mx-auto sm:mx-0'>Learn More</button>
        </div>
      </section>
      <section className=''>
        <div className="pt-20 pb-10 ">
          <h2 className='text-3xl sm:text-5xl font-bold px-8 mb-6'>Our Unique Approach</h2>
          <h3 className="text-4xl font-semibold mb-10 px-8">ART SOLUTION</h3>
          <div className="flex flex-col lg:flex-row mb-6">
            <div className="flex flex-row items-center bg-lime-200 py-4">
              <span className=" text-8xl sm:text-[160px]  md:pl-8 pr-2 px-4">A</span>
              <p className="flex-1 max-w-[400px] px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque. </p>
            </div>
            <div className="flex flex-row items-center bg-orange-500 py-4">
              <span className=" text-8xl sm:text-[160px]  md:pl-8 pr-2 px-4">R</span>
              <p className="flex-1 max-w-[400px] px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque. </p>
            </div>
            <div className="flex flex-row items-center bg-blue-600 py-4">
              <span className=" text-8xl sm:text-[160px]  md:pl-8 pr-2 px-4">T</span>
              <p className="flex-1 max-w-[400px] px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.</p>
            </div>

          </div>
          <div className='px-8'>

            <button className='bg-cyan-500  py-2 px-8 text-white text-[21px] inline-block rounded-md'>Learn More</button>
          </div>
        </div>
        <div className="pt-20 bg-white pb-10">

          <h3 className="text-4xl font-semibold mb-10 px-8">The EARTH Agenda</h3>
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 px-2 sm:px-8 gap-8">
            <div className='p-4 border border-gray-300 rounded-md'>
              <h4 className='font-semibold text-3xl mb-4'>Education</h4>
              <p className='leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eveniet, soluta illo distinctio veritatis ipsa vero dolore quisquam minima reiciendis, accusamus </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-20 pb-10'>
        <div className='flex flex-col md:flex-row px-4 sm:px-8 gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='font-bold text-3xl md:text-5xl mb-4'>We are taking Responsibility</h2>
            <p className='max-w-[500px] leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum amet, eligendi soluta ad maiores nisi vel, eveniet voluptates sapiente rem harum? Quis rerum totam magnam deleniti dolores cumque dolorum!</p>
            <button className='font-semibold px-8 py-2 mt-6 bg-cyan-300 hidden md:block'>See Projects</button>
          </div>
          <div className='flex-1'>
            <img src={proj} alt="" className='rounded-md block w-full' />
            <div className='flex justify-center gap-1 mt-4'>
              <span className='inline-block rounded-full h-3 w-4 border-cyan-300 border-[2px]'></span>
              <span className='inline-block rounded-full h-3 w-4 border-cyan-300 border-[2px]'></span>
              <span className='inline-block rounded-full h-3 w-4 border-cyan-300 border-[2px]'></span>
              <span className='inline-block rounded-full h-3 w-4 border-cyan-300 border-[2px]'></span>
            </div>
          </div>
          <button className='font-semibold px-8 py-2 mt-6 bg-cyan-300  md:hidden'>See Projects</button>
        </div>
      </section>
      <section className='pt-20 pb-10'>
        <div className='px-8'>
          <h2 className='text-4xl font-bold mb-8'>Become a Climate Champion</h2>
          <div className='grid sm:grid-cols-2  md:grid-cols-3 justify-around gap-8  mx-auto'>
            <div className='p-4 border shadow-md flex flex-col gap-4 max-w-[360px]'>
              <div className='min-h-[160px] bg-slate-500'></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, quis eum neque odit repudiandae?</p>
              <button className='block text-[21px] w-full bg-cyan-400 '>Donate</button>
            </div>
            <div className='p-4 border shadow-md flex flex-col gap-4 max-w-[360px]'>
              <div className='min-h-[160px] bg-slate-500'></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, quis eum neque odit repudiandae?</p>
              <button className='block text-[21px] w-full bg-cyan-400 '>Partner</button>
            </div>
            <div className='p-4 border shadow-md flex flex-col gap-4 max-w-[360px]'>
              <div className='min-h-[160px] bg-slate-500'></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, quis eum neque odit repudiandae?</p>
              <button className='block text-[21px] w-full bg-cyan-400 '>Volunteer</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-20 px-8 hidden">
          <h2 className="text-4xl font-semibold mb-6">Meet Team Clyme</h2>
          <div className="">

            <div className="flex justify-center gap-4 mb-10">

              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuela</p>
                <p>bsc physics</p>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="circ w-20 h-20 rounded-full border bg-white shadow-md"><img src="" alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
            </div>
            <div className="flex justify-center gap-10 mb-10">
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>

            </div>
            <div className="flex justify-center gap-4 mb-4">

              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
              <div className="flex text-center justify-center items-center flex-col">
                <div className="circ w-20 h-20 overflow-hidden pt-1 rounded-full border bg-white shadow-md"><img src={heroImg} alt="" /></div>
                <p className="font-semibold text-sm">Owoidighe-Abasi Emmanuel</p>
                <p>bsc physics</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default LandingPage