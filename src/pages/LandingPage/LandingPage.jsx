import heroImg from '../../assets/heroImg.png'
import earth from '../../assets/earth.png'
import proj from '../../assets/proj.jpg'
import bgImg from '../../assets/bgImg.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faDonate, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const AnimatedNumber = ({ achievements }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  return (
    <section ref={ref} className='bg-teal-950 p-8'>
      <div className='flex justify-around gap-8 flex-wrap'>
        {achievements.map((item, index) => (

          <p key={index} className='flex flex-col items-center'>
            {
              inView ? (
                <span className='block font-bold text-brwhite text-[48px]'>
                  <CountUp start={1} end={item.amount} duration={3.1} />
                  {item.pre}
                </span>
              ) : (
                <span className='block font-bold text-brwhite text-[48px]'>
                  <CountUp start={1} end={100} duration={1} />
                </span>
              )
              
              }
            <span className='block font-bold text-white text-[21px] capitalize tracking-wider'>{item.name}</span>
          </p>
        ))}

      </div>
    </section>

  );
};

function LandingPage() {

  const supportClyme = [
    {
      svgLink: faDonate,
      type: 'Donate',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, quis eum neque odit repudiandae?',

    },
    {
      svgLink: faHandshake,
      type: 'Partner',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, quis eum neque odit repudiandae?',
    },
    {
      svgLink: faHandsHelping,
      type: 'Volunteer',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis, quis eum neque odit repudiandae?',
    },
  ]

  const achievements = [
    { name: 'Universities', amount: 100, pre:'+' },
    { name: 'Volunteers', amount: 100, pre:'+' },
    { name: 'Countries', amount: 3, pre:'' },
    { name: 'Awards', amount: 3, pre: '' },
  ]

  const projects = [
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' }
  ]

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
    <div className='pt-10'>

      <div className='flex flex-col-reverse gap-8 sm:flex-row sm:items-center px-4 sm:px-8 relative  align-center'>
        <div className='flex-1 -mt-20 sm:mt-0 gradd py-10'>
          <h1 className='text-[40px] text-center sm:text-[64px] xl:text-[80px] font-bold leading-none mb-6 sm:text-left'>The time to save the planet is now</h1>
          <p className='text-16px md:text-[18px] my-4 text-center sm:text-left text-slate-600 max-w-[80%] mb-8'>Africa faces severe climate challenges like flooding, famine, and pollution. Clyme is driving innovative solutions—join us in taking action to protect our planet. </p>
          <a href='#actnow' className='px-4 py-1 text-[21px]  block w-fit bg-brblue text-white mx-auto  sm:mx-0'>Act Now</a>
        </div>
        <div className='  sm:h-auto hero-img sm:flex-1 flex align-bottom justify-center bg-center bg-contain bg-no-repeat' style={{ backgroundImage: `url(${bgImg})` }}><img src={heroImg} alt="" className=' w-1/2  sm:w-10/12 md:w-2/3 xl:w-1/2  h-auto block' /></div>
      </div>
      <AnimatedNumber achievements={achievements} />
      <section>
        <div className="py-20 px-8 ">
          <div className="flex text-[18px] justify-center items-center flex-col md:flex-row gap-8 text-center sm:text-left mb-4">
            {aboutVM.map((item, index) => (

              <div key={index} className="flex-1  sm:mx-0">
                <h2 className="text-4xl mb-4 font-bold text-center"><span className='font-normal capitalize'>Our</span> {item.title}</h2>
                <p className="max-w-[400px] mx-auto text-center my-4">{item.text}</p>
              </div>
            ))}
          </div>
          <Link to={'/about'} className='   py-2 px-8 bg-yellow-500 text-[21px] block w-fit rounded-md mx-auto '>Learn More</Link>

        </div>
      </section>
      <section className=''>
        <div className="pt-20 pb-10 ">
          <h2 className=' text-center text-3xl sm:text-5xl font-bold px-8 mb-20  '>Our Unique Approach</h2>
          <h3 className="text-4xl font-semibold mb-6 px-8 text-center ">ART SOLUTION</h3>
          <div className="flex flex-col lg:flex-row mb-6">
            {aboutART.map((item, index) => (

              <div key={index} className="flex flex-row items-center py-4">
                <span className=" text-8xl sm:text-[160px]  md:pl-8 pr-2 px-4">{item.title}</span>
                <p className="flex-1 max-w-[400px] px-4">{item.text}</p>
              </div>
            ))}


          </div>
          

            <Link to={'/about'} className='bg-brblue text-white hite py-2 px-8  text-[21px] block w-fit rounded-md mx-auto '>Learn More</Link>
        
        </div>
        <div className="pt-20 pb-10 px-4 sm:px-8">

          <h3 className="text-4xl text-center font-semibold mb-10 ">The <span className='text-4xl text-blue-500'>EARTH</span> Agenda</h3>
          <div className="grid justify-center  sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
            {aboutEarth.map((item, index) => (

              <div key={index} className='p-4 border border-gray-300 rounded-md bg-gradient-to-r from-brgreen/30 to-brblue/10'  >
                <h4 className='font-semibold text-3xl mb-4 backdrop-filter backdrop-opacity-40 backdrop-blur-40'>{item.title}</h4>
                <p className='leading-loose'>{item.text}</p>
              </div>
            ))}
          </div>
          <Link to={'/about'} className='bg-brblue text-white hite py-2 px-8 text-[21px] block w-fit rounded-md mx-auto sm:mx-0'>Learn More</Link>

        </div>
      </section>
      <section className='pt-20 bg-green-500/50 pb-10'>
        <div className='flex flex-col md:flex-row px-4 sm:px-8 gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='font-bold text-3xl md:text-5xl mb-4'>Making Strides Toward a Greener Tomorrow</h2>
            <p className='max-w-[500px] leading-loose'>CarbonRewards is nearing launch with final development stages completed and set to go live within the next quarter. We've engaged key stakeholders for broad support, conducted successful pilot campaigns, and acquired 3 acres of land for future climate action. Additionally, our project was a runner-up in the largest STEM conference at the University of Ibadan, winning N150,000 out of 30 competing teams.</p>
            <button className='font-semibold px-8 py-2 mt-6 bg-brblue text-white hidden md:block'>See Projects</button>
          </div>
          <div className='flex-1'>
            <img src={proj} alt="" className='rounded-md block w-full' />
            <div className='flex justify-center gap-1 mt-4'>
              {projects.map((item, index) =>
                <span key={index} className='inline-block rounded-full h-3 w-4 border-cyan-300 border-[2px]'></span>
              )}

            </div>
          </div>
          <button className='font-semibold px-8 py-2 mt-6 bg-brblue text-white  md:hidden'>See Projects</button>
        </div>
      </section>
      <section className='pt-20 pb-10' id='actnow'>
        <div className='px-8'>
          <h2 className='text-4xl font-bold mb-8'>Become a Climate Champion</h2>
          <div className='grid sm:grid-cols-2  md:grid-cols-3 justify-around gap-8  mx-auto'>
            {supportClyme.map((item, index) =>

              <div key={index} className='p-4 border border-teal-500 shadow-md flex flex-col items-center text-center gap-4 max-w-[360px]'>
                <div className=' flex  items-base'>
                  <FontAwesomeIcon icon={item.svgLink} className="text-braccent-500 text-8xl" />
                </div>
                <p>{item.text}</p>
                <button className='block text-[21px] py-1 px-8 w-fit  bg-brblue text-white '>{item.type}</button>
              </div>
            )}

          </div>
        </div>
      </section>
    </div> 
  )
}

export default LandingPage