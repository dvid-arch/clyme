import proj from '../../assets/proj.jpg'

function Blog() {
    return (
        <div className="pt-10">
            <div className='px-8'>

                <h1 className="font-semibold text-4xl sm:text-6xl   text-center mb-4">Lets Talk Climate Change</h1>
                <p className="text-center">stay updated about climate change issues around you</p>
            </div>
            <div className="px-8 mt-10 py-8 bg-orange-400 ">
                <h2 className="text-3xl text-white font-bold mb-6">Today's Pick</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className=" md:px-8">
                        <img src={proj} alt="" className='block w-full md:max-w-[400px] rounded-lg' />
                    </div>
                    <div className="flex-1 ">
                        <h3 className="text-4xl font-semibold">
                            It rains heavy sooth in Portharcourt
                        </h3>
                        <h4>Author: Owoidighe-Abasi Emmanuel</h4>
                        <h5>25th June 2024</h5>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, consequatur explicabo exercitationem, molestiae iusto iste eligendi illum fuga earum harum recusandae a officia ratione blanditiis voluptatem? Atque id doloribus soluta.</p>
                    </div>

                </div>
            </div>
            <section className='pt-20 pb-10'>
                <h2 className="text-3xl font-bold mb-12 pl-8">More Climate Change Articles</h2>

                <span className='inline-block px-8 mb-4 text-2xl text-slate-500'>June 2024</span>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-8'>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                    <div className='p-4 shadow-md rounded-md border bg-white'>
                        <img src={proj} alt="" />
                        <div>
                            <h3 className='text-2xl font-semibold'>Heavy sooth raining in Port-Harcourt</h3>
                            <h4>Owoidighe-abasi Emmanuel</h4>
                            <h5>24 June 2024</h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog