import { Link } from 'react-router-dom'
import heroImg from '../../assets/heroImg.png'
import Mteam from './MTeam'

function About() {
    const aboutVM = [
        {
            title: 'vision',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam praesentium odit libero doloremque quaerat, fugit explicabo debitis expedita similique quo voluptatum nam aperiam eius vitae aliquid beatae fugiat alias?'
        },
        {
            title: 'Mision',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam praesentium odit libero doloremque quaerat, fugit explicabo debitis expedita similique quo voluptatum nam aperiam eius vitae aliquid beatae fugiat alias?'
        }
    ]

    const aboutART = [
        {
            title: 'A',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
            bg: ''
        },
        {
            title: 'R',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
            bg: ''
        },
        {
            title: 'T',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
            bg: ''
        },

    ]

    const aboutEarth = [
        {
            title: 'Education',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
        },
        {
            title: 'Advocacy',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
        },
        {
            title: 'Recylcing',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
        },
        {
            title: 'Technology',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
        },
        {
            title: 'Harmony',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quo minima, non aliquid minus officia optio, molestiae autem pariatur est itaque.',
        }
    ]

    return (
        <div className="">
            <div className=" px-8  pt-20 pb-20 block md:flex md:flex-row-reverse items-center  gap-8">
                <div>
                    <h2 className="text-4xl sm:text-6xl max-w-[500px] leading-tight font-semibold">One <br />Carbon-Footprint at a time
                    </h2>
                    <p className="my-4 max-w-[600px] text-[17px] leading-loose">Clyme is a forward-thinking climate tech company committed to addressing climate change in Africa through ground breaking technology. Our mission is to empower individuals to make eco-friendly choices by introducing an app that incentivizes users for maintaining a carbon footprint below a monthly limit.</p>
                </div>
                <div className="vid-box w-full flex-1">
                    <iframe width='100%' height='350' src="https://www.youtube.com/embed/vTQeJbh2ccA?si=qH0efJMRzlOmC9sk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>


            </div>

            <section>
                <div className="py-20 px-8 bg-teal-500">
                    <div className="flex flex-col md:flex-row gap-8 text-center sm:text-left mb-4">
                        {aboutVM.map((item, index) => (

                            <div key={index} className="flex-1 mx-auto sm:mx-0">
                                <h2 className="text-4xl mb-4 font-bold"><span className='font-normal capitalize'>Our</span> {item.title}</h2>
                                <p className="max-w-[400px] my-4">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <Link to={'/about'} className='bg-white py-2 px-8 text-cyan-500 text-[21px] block w-fit rounded-md mx-auto sm:mx-0'>Learn More</Link>
                </div>
            </section>
            <section className=''>
                <div className="pt-20 pb-10 ">
                    <h2 className='text-3xl sm:text-5xl font-bold px-8 mb-6 text-center sm:text-left'>Our Unique Approach</h2>
                    <h3 className="text-4xl font-semibold mb-10 px-8 text-center sm:text-left">ART SOLUTION</h3>
                    <div className="flex flex-col lg:flex-row mb-6">
                        {aboutART.map((item, index) => (

                            <div className="flex flex-row items-center py-4">
                                <span className=" text-8xl sm:text-[160px]  md:pl-8 pr-2 px-4">{item.title}</span>
                                <p className="flex-1 max-w-[400px] px-4">{item.text}</p>
                            </div>
                        ))}


                    </div>
                    <div className='px-8'>

                        <Link to={'/about'} className='bg-cyan-500 hite py-2 px-8 text-white text-[21px] block w-fit rounded-md mx-auto sm:mx-0'>Learn More</Link>
                    </div>
                </div>
                <div className="pt-20 pb-10 px-4 sm:px-8">

                    <h3 className="text-4xl text-center sm:text-left font-semibold mb-10 ">The <span className='text-4xl text-blue-500'>EARTH</span> Agenda</h3>
                    <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                        {aboutEarth.map((item, index) => (

                            <div className='p-4 border border-gray-300 rounded-md'>
                                <h4 className='font-semibold text-3xl mb-4'>{item.title}</h4>
                                <p className='leading-loose'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <Link to={'/about'} className='bg-cyan-500 hite py-2 px-8 text-white text-[21px] block w-fit rounded-md mx-auto sm:mx-0'>Learn More</Link>

                </div>
            </section>
            <section>
                <div className='px-8'>
                    <h2 className='text-4xl font-semibold mb-8'>Awards and Commendations</h2>
                    <div className=''>

                    </div>
                </div>
            </section>
            <Mteam />
        </div>
    )
}

export default About