import { Link } from 'react-router-dom'
import heroImg from '../../assets/heroImg.png'
import Mteam from './MTeam'

function About() {
    const aboutVM = [
        {
            title: 'vision',
            text: 'Our vision is a world where every individual takes responsibility for their environmental impact, leading to a more sustainable and resilient future for generations to come.'
        },
        {
            title: 'Mision',
            text: 'At Clyme, our mission is to empower individuals to make eco-friendly choices and combat climate change by providing innovative technology solutions that incentivize sustainable behaviors and reduce carbon footprints.'
        }
    ]

    const aboutART = [
        {
            title: 'A',
            text: 'Clyme partners with communities, NGOs, and policymakers to drive sustainability through grassroots campaigns like climate awareness, recycling, and tree planting.',
            bg: ''
        },
        {
            title: 'R',
            text: 'CClyme drives renewable energy adoption by partnering with providers and offering innovative financing, making clean energy accessible across Africa to reduce carbon emissions.',
            bg: ''
        },
        {
            title: 'T',
            text: 'Clymes technology solution includes a mobile app that helps users track carbon footprints, set goals, and get personalized tips to reduce emissions. Our platform also supports carbon offsetting projects to promote global sustainability.',
            bg: ''
        },

    ]

    const aboutEarth = [
        {
            title: 'Education',
            text: 'Utilize our website and app to disseminate information on climate change, fostering awareness and understanding..',
        },
        {
            title: 'Advocacy',
            text: 'Seminars and training for youth engagement in climate change action.',
        },
        {
            title: 'Recylcing',
            text: 'Invest in renewable energy projects to offset carbon emissions and promote sustainable practices.',
        },
        {
            title: 'Technology',
            text: 'Innovative website and app for climate information in over 20 languages.',
        },
        {
            title: 'Harmony',
            text: 'Collaborate with governments, private entities, and fintech companies to amplify our impact.',
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
                <div className="py-20 px-8 bg-teal-400">
                    <div className="flex flex-col md:flex-row gap-8 text-center sm:text-left mb-4">
                        {aboutVM.map((item, index) => (

                            <div key={index} className="flex-1 mx-auto sm:mx-0">
                                <h2 className="text-4xl mb-4 font-bold"><span className='font-normal capitalize'>Our</span> {item.title}</h2>
                                <p className="max-w-[400px] my-4">{item.text}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className=''>
                <div className="pt-20 pb-10 ">
                    <h2 className='text-3xl sm:text-5xl font-bold px-8 mb-6 text-center sm:text-left'>Our Unique Approach</h2>
                    <h3 className="text-4xl font-semibold mb-10 px-8 text-center sm:text-left">ART SOLUTION</h3>
                    <div className="flex flex-col lg:flex-row mb-6">
                        {aboutART.map((item, index) => (

                            <div key={index} className="flex flex-row items-center py-4">
                                <span className=" text-8xl sm:text-[160px]  md:pl-8 pr-2 px-4">{item.title}</span>
                                <p className="flex-1 max-w-[400px] px-4">{item.text}</p>
                            </div>
                        ))}


                    </div>

                </div>
                <div className="pt-20 pb-10 px-4 sm:px-8">

                    <h3 className="text-4xl text-center sm:text-left font-semibold mb-10 ">The <span className='text-4xl text-blue-500'>EARTH</span> Agenda</h3>
                    <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                        {aboutEarth.map((item, index) => (

                            <div key={index} className='p-4 border border-gray-300 rounded-md bg-gradient-to-r from-brgreen to-brblue'  >
                                <h4 className='font-semibold text-3xl mb-4 backdrop-filter backdrop-opacity-40 backdrop-blur-40'>{item.title}</h4>
                                <p className='leading-loose'>{item.text}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
            <section className='bg-teal-950'>
                <div className='px-8 pt-10 py-10'>
                    <h2 className='mb-8 text-4xl font-bold text-white'>The Clyme Advantage: Unmatched Progress
                    </h2>
                    <ul className='grid md:grid-cols-2 gap-8 text-[18px]'>
                        <li className='max-w-[600px] min-w-[300px] text-gray-300'><span className='font-semibold text-xl text-white'>App Development: </span>
                            The CarbonRewards app is in the final stages of development, set to launch within the next quarter.
                        </li>
                        <li className='max-w-[600px] min-w-[300px] text-gray-300'><span className='font-semibold text-xl text-white'>App Development: </span>
                            The CarbonRewards app is in the final stages of development, set to launch within the next quarter.
                        </li>
                        <li className='max-w-[600px] min-w-[300px] text-gray-300'><span className='font-semibold text-xl text-white'>App Development: </span>
                            The CarbonRewards app is in the final stages of development, set to launch within the next quarter.
                        </li>
                        <li className='max-w-[600px] min-w-[300px] text-gray-300'><span className='font-semibold text-xl text-white'>App Development: </span>
                            The CarbonRewards app is in the final stages of development, set to launch within the next quarter.
                        </li>
                        <li className='max-w-[600px] min-w-[300px] text-gray-300'><span className='font-semibold text-xl text-white'>App Development: </span>
                            The CarbonRewards app is in the final stages of development, set to launch within the next quarter.
                        </li>
                    </ul>


                </div>
            </section>
            {/* <Mteam /> */}
        </div>
    )
}

export default About