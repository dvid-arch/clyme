import { Link } from 'react-router-dom'
import proj from '../../assets/proj.jpg'

function Blog() {
    return (
        <div className="pt-10">
            <div className='px-8'>

                <h1 className="font-semibold text-4xl sm:text-6xl   text-center mb-4">Lets Talk Climate Change</h1>
                <p className="text-center text-[18px]">stay updated about climate change issues around you</p>
            </div>
            <div className="px-8 mt-10 py-8 bg-braccent ">
                <h2 className="text-3xl text-brwhite font-bold mb-6">Today's Pick</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className=" md:px-8">
                        <img src={proj} alt="" className='block w-full md:max-w-[400px] rounded-lg' />
                    </div>
                    <div className="flex-1">
                        <h3 className="opacity-80 text-4xl capitalize max-w-[600px] mb-4 font-semibold">
                        Solar Power and Renewable Energy in Nigeria: A Sustainable Future
                        </h3>
                        
                        <p className="my-4 max-w-[600px] text-[18px] opacity-70 ">Nigeria, with its abundant natural resources and vast energy needs, stands at a critical juncture in its quest for sustainable energy solutions. As the largest economy in Africa and a nation with over 200 million people, Nigeria’s demand for electricity far exceeds its supply.</p>
                       
                        <h5 className='text-sm opacity-70'>25th June 2024</h5>
                        <Link to={'/blogpost'} className='bg-white/40 underline w-fit text-black block px-4 py-1 mt-6 font-bold text-black/70'>Read Article</Link>
                    </div>

                </div>
            </div>
            <section className='pt-20 pb-10'>
                <h2 className="text-3xl font-bold mb-12 pl-8">More Climate Change Articles</h2>

                <span className='inline-block px-8 mb-4 text-2xl text-slate-500'>June 2024</span>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-10 mt-6'>
                    <div className=''>
                        <img src={proj} alt="" />
                        <div>
                            <Link to={'/blogpost'} className='text-2xl font-bold underline  mb-2'>Heavy sooth raining in Port-Harcourt</Link>
                            <h4 className='font-semibold'>Owoidighe-abasi Emmanuel</h4>
                            <h5 className='text-sm'>24 June 2024</h5>
                        </div>
                    </div>
                    
                 
                </div>
            </section>
        </div>
    )
}

export default Blog