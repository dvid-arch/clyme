import proj from '../../assets/proj.jpg'

function BlogPost() {
    return (
        <div className='flex justify-between'>
            <div className='px-8 flex-1'>
                <div className=' mt-20 p-4 rounded-lg bg-orange-400 mb-6'>
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="">
                            <img src={proj} alt="" className='w-full max-w-[400px] rounded-lg block' />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-4xl font-semibold">
                                It rains heavy sooth in Portharcourt
                            </h3>
                            <h4>Owoidighe-Abasi Emmanuel</h4>
                            <h5>25th June 2024</h5>
                        </div>

                    </div>
                </div>
                <div className="">
                    <h3 className="text-4xl font-bold">
                        It rains heavy sooth in Portharcourt
                    </h3>
                    <h4>Author: Owoidighe-Abasi Emmanuel</h4>
                    <h5>25th June 2024</h5>
                </div>
                <div className='text-[17px] text-green-950'>
                    <p className='leading-loose my-4 max-w-[80ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea repudiandae, nobis ipsa atque delectus. Incidunt, quas. Ratione sint, consequatur magni, eligendi ullam odit, quo blanditiis ad maiores hic nemo!</p>
                    <p className='leading-loose my-4 max-w-[80ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea repudiandae, nobis ipsa atque delectus. Incidunt, quas. Ratione sint, consequatur magni, eligendi ullam odit, quo blanditiis ad maiores hic nemo!</p>
                    
                    <h3 className='font-semibold mb-2 text-xl'>list of hello there</h3>
                    <ul className='px-8 list-disc'>
                        <li>hello there</li>
                        <li>hello there</li>
                        <li>hello there</li>
                        <li>hello there</li>
                    </ul>
                    <p className='leading-loose my-4 max-w-[80ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea repudiandae, nobis ipsa atque delectus. Incidunt, quas. Ratione sint, consequatur magni, eligendi ullam odit, quo blanditiis ad maiores hic nemo!</p>

                    <div>
                        <h6 className='text-sm font-semibold mb-1'>Clean up Process in Abba</h6>
                        <img src={proj} alt="" className='block rounded-md w-full max-w-[500px] ' />
                    </div>
                </div>
            </div>

            <div className='hidden md:block w-full max-w-[300px] sticky top-[120px]  h-[80px] mt-20 p-4'>
                <div className="p-4 bg-slate-400">
                    <h2 className='font-semibold text-xl mb-2'>Share Article</h2>
                    <div className='flex gap-2'>
                        <span className='inline-block h-8 w-8 border rounded-md'></span>
                        <span className='inline-block h-8 w-8 border rounded-md'></span>
                        <span className='inline-block h-8 w-8 border rounded-md'></span>
                        <span className='inline-block h-8 w-8 border rounded-md'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost