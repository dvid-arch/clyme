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

            <div className='py-20 px-8'>
                <h2 className='text-4xl mb-6 font-bold'>A Thousand Words in Images</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between gap-8 mt-10 ">
                    <div className=" ">
                        <img src={proj} alt="" className="w-full mb-2" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects