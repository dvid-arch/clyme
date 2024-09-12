import { Link } from 'react-router-dom'
import footprint from '../../assets/footprint.png'
import Mteam from './MTeam'
import bg from '../../assets/bg.jpg'

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
            title: 'Advocacy',
            text: 'Clyme partners with communities, NGOs, and policymakers to drive sustainability through grassroots campaigns like climate awareness, recycling, and tree planting.',
            bg: ''
        },
        {
            title: 'Renewable Energy',
            text: 'Clyme drives renewable energy adoption by partnering with providers and offering innovative financing, making clean energy accessible across Africa to reduce carbon emissions.',
            bg: ''
        },
        {
            title: 'Technology',
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

    const clymeAchieves = [
        {
            title: 'App Development',
            text: 'The CarbonRewards app is in the final stages of development, set to launch within the next quarter.'

        },
        {
            title: 'Public Awareness',
            text: 'Conducted successful pilot campaigns, generating excitement and anticipation for the app launch.'

        },
        {
            title: 'Strategic Partnerships',
            text: 'Engaged in discussions with key stakeholders, ensuring widespread adoption and support.'

        },
        {
            title: 'Land Acquisition',
            text: 'Acquired 3 acres of land(18 Plots) worth 6000USD for future Climate Action.'

        },
        {
            title: 'STEM Competition Winner(Runner-up)',
            text: 'Clyme Idea won the sum of 150,000 at the Largest STEM Conference at the University of Ibadan. The Team came 2nd Position out of 30 Teams that contested.'

        },

    ]

    return (
        <div className="">
            <div className=" px-8  pt-20 pb-20 block md:flex md:flex-row-reverse items-center  gap-8">
                <div className='flex-1'>
                    <h2 className="text-4xl sm:text-6xl max-w-[500px] leading-tight font-semibold mb-10">One <br />Carbon-Footprint at a time
                    </h2>
                    <p className="my-4 max-w-[400px] text-[17px] leading-loose">Clyme is a forward-thinking climate tech company committed to addressing climate change in Africa through ground breaking technology. Our mission is to empower individuals to make eco-friendly choices by introducing an app that incentivizes users for maintaining a carbon footprint below a monthly limit.</p>
                </div>
                <div className="flex-1 text-center">
                    <img src={footprint} alt="" className='max-w-[300px] mx-auto' />
                </div>


            </div>

            <section>
                <div className="py-20 px-8 bg-braccent">
                    <div className="flex text-[18px] justify-center items-baseline flex-col md:flex-row gap-8 text-center sm:text-left mb-4 ">
                        {aboutVM.map((item, index) => (

                            <div key={index} className="flex-1  sm:mx-0">
                                <h2 className="text-4xl mb-4 font-bold text-center"><span className='font-normal capitalize'>Our</span> {item.title}</h2>
                                <p className="max-w-[400px] mx-auto text-center my-4">{item.text}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className='' >
                <div className=" bg-cover bg-no-repeat" >
                    <div className=' text-center py-20'>
                        <h2 className=' text-3xl sm:text-5xl font-bold px-8 mb-20  '>Our Unique Approach</h2>
                        <h3 className="text-4xl font-semibold mb-6 px-8  ">ART SOLUTION</h3>
                        <div className="flex flex-col lg:flex-row mb-6 items-start">
                            {aboutART.map((item, index) => (

                                <div key={index} className="flex mx-auto flex-col items-center justify-center py-4">
                                    <h3 className='text-[18px] font-bold bg-green-500/20  px-2 rounded-md py-1 mb-4 '>{item.title}</h3>
                                    <p className="flex-1 max-w-[400px] px-4">{item.text}</p>
                                </div>
                            ))}


                        </div>




                    </div>

                </div>
                <div className="pt-20 pb-10 px-4 sm:px-8 ">

                    <h3 className="text-4xl  font-semibold mb-10 ">The <span className='text-4xl text-blue-500'>EARTH</span> Agenda</h3>
                    <div className="grid justify-center  sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                        {aboutEarth.map((item, index) => (

                            <div key={index} className='p-4 bg-white border border-gray-300 rounded-md bg-gradient-to-r '  >
                                <h4 className='font-semibold text-3xl mb-4 backdrop-filter backdrop-opacity-40 backdrop-blur-40'>{item.title}</h4>
                                <p className='leading-loose'>{item.text}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
            <section className='py-20 px-8'>
                <div className=' '>
                    <h2 className='mb-10 text-4xl font-bold '>The Clyme Advantage: Unmatched Progress
                    </h2>
                    <div className='flex'>


                        <ul className='flex-1 grid sm:grid-cols-2 gap-8 justify-between'>
                            {
                                clymeAchieves.map((n, i) => (

                                    <li className=' min-w-[300px] p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform'><span className='font-semibold block  '>{n.title}: </span>
                                        {n.text}
                                    </li>
                                ))
                            }


                        </ul>

                    </div>


                </div>
            </section>
            <Mteam />
        </div>
    )
}

export default About