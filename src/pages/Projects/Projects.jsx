import proj from '../../assets/proj.jpg'

function Projects() {
    return (
        <div>

            <div className="h-[380px] relative text-center  flex flex-col justify-center  after:absolute after:h-full after:w-full after:bg-green-950 after:opacity-60 pt-20 bg-center text-white bg-cover bg-no-repeat after:top-0 after:left-0 px-4 sm:px-8" style={{ backgroundImage: `url(${proj})` }}>
                <div className='z-20 relative'>

                    <h1 className=" text-4xl  sm:text-6xl mb-4">We are taking Responsibility</h1>
                    <p>See some of the projects we have completed so far</p>
                </div>

            </div>
            <section className='bg-teal-950 px-8 py-2'>
                <div className='flex justify-around gap-8 flex-wrap'>
                    <p className='flex flex-col items-center'>
                        <span className='block font-bold text-white text-[21px] sm:text-[48px]'>100+</span>
                        <span className='block font-bold text-white text-[16px] sm:text-[21px] capitalize tracking-wider'>Volunteers</span>
                    </p>
                    <p className='flex flex-col items-center'>
                        <span className='block font-bold text-white text-[21px] sm:text-[48px]'>10+</span>
                        <span className='block font-bold text-white text-[16px] sm:text-[21px] capitalize tracking-wider'>Universities</span>
                    </p>
                    <p className='flex flex-col items-center'>
                        <span className='block font-bold text-white text-[21px] sm:text-[48px]'>3</span>
                        <span className='block font-bold text-white text-[16px] sm:text-[21px] capitalize tracking-wider'>Awards</span>
                    </p>
                    <p className='flex flex-col items-center '>
                        <span className='block font-bold text-white text-[21px] sm:text-[48px]'>100+</span>
                        <span className='block font-bold text-white text-[16px] sm:text-[21px] capitalize tracking-wider'>Volunteers</span>
                    </p>
                </div>
            </section>
            <div className="flex flex-wrap justify-center  gap-4 sm:gap-6 py-2 px-4 sm:px-8 bg-slate-200">
                <a href="#" className="inline-block py-1 px-2 sm:px-6 border rounded-full border-cyan-400 bg-cyan-300">All</a>
                <a href="#" className="inline-block py-1 px-2 sm:px-6 border rounded-full border-cyan-400">Nigeria</a>
                <a href="#" className="inline-block py-1 px-2 sm:px-6 border rounded-full border-cyan-400">Rwanda</a>
                <a href="#" className="inline-block py-1 px-2 sm:px-6 border rounded-full border-cyan-400">Ghana</a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between gap-8 px-8 pt-10 py-20">
                <div className="  p-4 ">
                    <img src={proj} alt="" className="w-full mb-2" />
                    <div className='flex gap-2'>
                        <span className='border inline-block bg-gray-400 h-8 w-8'></span>
                        <div className='flex-1'>

                            <p className='text-[18px] underline underline-offset-4 mb-1 font-semibold'>Rwanda Climate Sensitization program</p>
                            <p className='text-sm opacity-70'>24th july 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects