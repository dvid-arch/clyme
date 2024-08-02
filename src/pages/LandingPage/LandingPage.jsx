import heroImg from '../../assets/heroImg.png'
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

          <p className='flex flex-col items-center'>
            {
              inView ? (
                <span className='block font-bold text-white text-[48px]'>
                  <CountUp start={1} end={item.amount} duration={3.1} />
                  {item.pre}
                </span>
              ) : (
                <span className='block font-bold text-white text-[48px]'>
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
    <div className='pt-10'>

      <div className='flex flex-col-reverse gap-8 sm:flex-row sm:items-center px-4 sm:px-8 relative  align-center'>
        <div className='flex-1 -mt-20 sm:mt-0 gradd py-10'>
          <h1 className='text-[40px] text-center sm:text-[64px] xl:text-[80px] font-bold leading-none mb-6 sm:text-left'>The time to save the planet is Now</h1>
          <p className='text-16px md:text-[18px] my-4 text-center sm:text-left text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti numquam eligendi, ea exercitationem quibusdam </p>
          <a href='#actnow' className='px-4 py-1 text-[21px]  block w-fit bg-cyan-300 mx-auto  sm:mx-0'>Act Now</a>
        </div>
        <div className='  sm:h-auto hero-img sm:flex-1 flex align-bottom justify-center bg-center bg-contain bg-no-repeat' style={{ backgroundImage: `url(${bgImg})` }}><img src={heroImg} alt="" className=' w-1/2  sm:w-10/12 md:w-2/3 xl:w-1/2  h-auto block' /></div>
      </div>
      <AnimatedNumber achievements={achievements} />
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
      <section className='pt-20 pb-10'>
        <div className='flex flex-col md:flex-row px-4 sm:px-8 gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='font-bold text-3xl md:text-5xl mb-4'>We are taking Responsibility</h2>
            <p className='max-w-[500px] leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum amet, eligendi soluta ad maiores nisi vel, eveniet voluptates sapiente rem harum? Quis rerum totam magnam deleniti dolores cumque dolorum!</p>
            <button className='font-semibold px-8 py-2 mt-6 bg-cyan-300 hidden md:block'>See Projects</button>
          </div>
          <div className='flex-1'>
            <img src={proj} alt="" className='rounded-md block w-full' />
            <div className='flex justify-center gap-1 mt-4'>
              {projects.map((item, index) =>
                <span key={index} className='inline-block rounded-full h-3 w-4 border-cyan-300 border-[2px]'></span>
              )}

            </div>
          </div>
          <button className='font-semibold px-8 py-2 mt-6 bg-cyan-300  md:hidden'>See Projects</button>
        </div>
      </section>
      <section className='pt-20 pb-10' id='actnow'>
        <div className='px-8'>
          <h2 className='text-4xl font-bold mb-8'>Become a Climate Champion</h2>
          <div className='grid sm:grid-cols-2  md:grid-cols-3 justify-around gap-8  mx-auto'>
            {supportClyme.map((item, index) =>

              <div key={index} className='p-4 border border-teal-300 shadow-md flex flex-col gap-4 max-w-[360px]'>
                <div className=' flex  items-base'>
                  <FontAwesomeIcon icon={item.svgLink} className="text-red-500 text-8xl" />
                </div>
                <p>{item.text}</p>
                <button className='block text-[21px] py-1 px-8 w-fit  bg-cyan-400 '>{item.type}</button>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage