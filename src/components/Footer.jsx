
function Footer() {
    return (
        <footer>
            <div className="bg-teal-500 p-8">
                <div className='flex sm:items-center max-w-[800px] mx-auto flex-col sm:flex-row text-center sm:text-left'>
                    <div className='p-4 text-[21px]'>
                        <p>Stay updated about climate issues!</p>
                        <p className='text-white'>Subscribe to our NewsLetter</p>
                    </div>
                    <div className='flex-1 relative w-full flex flex-col gap-1'>
                        <input type="text" className='block w-full text-[21px] py-1 px-4 rounded-md' />
                        <button className='sm:absolute right-0 bottom-0 block py-1 px-4 bg-cyan-400 text-[21px] rounded-md sm:round-none sm:rounded-r-md'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-teal-950 text-brwhite p-8 text-center'>
                <div className='flex flex-col sm:flex-row gap-8 justify-center mb-4 '>

                    <div>clyme</div>
                    <div>
                        <p>Copyright @2013-2021. all rights reserved</p>
                    </div>
                </div>
                <div className=' flex flex-wrap  gap-2 justify-center text-cyan-400'>
                    <span>Sponsorship</span>
                    <span>Partnership</span>
                    <span>Contact</span>
                    <span>Blog</span>
                    <span>Projects</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer