import proj from '../../assets/proj.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function secondaryHeader(){

}

function list(){

}

function title(){

}



function BlogPost() {
    const share = [
        {
            icon: faFacebook,
            link: '#',
            color:'text-blue-600'
        },
        {
            icon: faInstagram,
            link: '#',
            color:'text-brown-600'
        },
        {
            icon: faXTwitter,
            link: '#',
            color:'text-black'
        },

        {
            icon: faLinkedin,
            link: '#',
            color: 'text-slate-600'
        }
    ]
    return (
        <div className='flex justify-between'>
            <div className='px-8 flex-1 pb-20'>
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
                <div className=" border-l-8 border-l-teal-400 pl-8">
                    <h3 className="text-4xl font-bold mb-2">
                        It rains heavy sooth in Portharcourt
                    </h3>
                    <h4 className='font-semibold text-slate-600'> Owoidighe-Abasi Emmanuel</h4>
                    <h5 className='text-sm text-slate-600'>25th June 2024</h5>
                </div>
                <div className='text-teal-950 tracking-wide text-[17px]'>
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

            <div className='hidden md:block w-full max-w-[300px] sticky   h-[80px] mt-20 p-4'>
                
                
                <div className="p-4 bg-gray-100 rounded-md mb-6  ">
                    <h2 className='font-semibold text-xl mb-2'>Share Article</h2>
                    <div className='flex gap-2'>
                        {share.map((n,index)=><span className={'inline-block h-8 w-8 border rounded-md text-xl ' + n.color }><FontAwesomeIcon icon={n.icon} /></span>)}
                    </div>
                </div>

                <div className="p-4 bg-white rounded-md mb-8">
                    <h2 className='font-semibold  mb-2 text-slate-600'>Read more articles</h2>
                    <div className=' p-4 shadow-md bg-white rounded mb-6'>
                        <h3 className=' font-semibold underline underline-offset-4 '>It rains Acid in China</h3>
                        <p className='text-sm text-slate-600'>Owoidighe-abasi Emmanuel</p>
                        <p className='text-[14px] text-slate-500'>25th June 2024</p>
                        <button className='border  border-cyan-400 px-4 '>read now</button>
                    </div>
                    <div className=' p-4 shadow-md bg-white rounded mb-6'>
                        <h3 className=' font-semibold underline underline-offset-4 '>It rains Acid in China</h3>
                        <p className='text-sm text-slate-600'>Owoidighe-abasi Emmanuel</p>
                        <p className='text-[14px] text-slate-500'>25th June 2024</p>
                        <button className='border  border-cyan-400 px-4 '>read now</button>
                    </div>
                    <div className=' p-4 shadow-md bg-white rounded mb-6'>
                        <h3 className=' font-semibold underline underline-offset-4 '>It rains Acid in China</h3>
                        <p className='text-sm text-slate-600'>Owoidighe-abasi Emmanuel</p>
                        <p className='text-[14px] text-slate-500'>25th June 2024</p>
                        <button className='border  border-cyan-400 px-4 '>read now</button>
                    </div>
                    <div className=' p-4 shadow-md bg-white rounded mb-6'>
                        <h3 className=' font-semibold underline underline-offset-4 '>It rains Acid in China</h3>
                        <p className='text-sm text-slate-600'>Owoidighe-abasi Emmanuel</p>
                        <p className='text-[14px] text-slate-500'>25th June 2024</p>
                        <button className='border  border-cyan-400 px-4 '>read now</button>
                    </div>
                    <div className=' p-4 shadow-md bg-white rounded mb-6'>
                        <h3 className=' font-semibold underline underline-offset-4 '>It rains Acid in China</h3>
                        <p className='text-sm text-slate-600'>Owoidighe-abasi Emmanuel</p>
                        <p className='text-[14px] text-slate-500'>25th June 2024</p>
                        <button className='border  border-cyan-400 px-4 '>read now</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BlogPost