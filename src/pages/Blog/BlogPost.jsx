import proj from '../../assets/proj.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import BlogList from './BlogList';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogById, getBlogs } from '../../services/blogServices';
import { useEffect, useState } from 'react';
import Cblog from './Cblog';



function Share({mobile}) {
    return <div className={!mobile?'hidden md:sticky md:top-[100px] md:left-0  md:block':'md:hidden mb-8'}>
        <h2 className='capitalize text-brblue font-bold text-xl mb-2'>share article</h2>
        <div className='flex gap-4'>
            <span className='border inline-block p-2  w-fit'><FontAwesomeIcon icon={faFacebook} fontSize={32} color='' /></span>
            <span className='border inline-block p-2  w-fit'><FontAwesomeIcon icon={faInstagram} fontSize={32} color='' /></span>
            <span className='border inline-block p-2  w-fit'><FontAwesomeIcon icon={faLinkedin} fontSize={32} color='' /></span>
            <span className='border inline-block p-2  w-fit'><FontAwesomeIcon icon={faXTwitter} fontSize={32} color='' /></span>
        </div>
    </div>
}



function BlogPost() {
    const [blog, setBlog] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBlog = async () => {

            const fetchedBlog = await getBlogById(id);
            if (fetchedBlog) {
                setBlog(fetchedBlog)
            } else {
                navigate('/404')
            }

        };
        fetchBlog();
    }, []);



    // const data = {
    //     title: 'Solar Power and Renewable Energy in Nigeria: A Sustainable Future',
    //     blogBody: [
    //         {
    //             type: 'paragraph',
    //             text: "Nigeria, with its abundant natural resources and vast energy needs, stands at a critical juncture in its quest for sustainable energy solutions. As the largest economy in Africa and a nation with over 200 million people, Nigeria’s demand for electricity far exceeds its supply. With frequent power shortages and a reliance on fossil fuels, renewable energy, particularly solar power, is emerging as a viable solution to bridge the country’s energy gap while addressing the challenges of climate change and environmental degradation.",
    //             header: ''
    //         },
    //         {
    //             type: 'paragraph',
    //             text: "Nigeria, with its abundant natural resources and vast energy needs, stands at a critical juncture in its quest for sustainable energy solutions. As the largest economy in Africa and a nation with over 200 million people, Nigeria’s demand for electricity far exceeds its supply. With frequent power shortages and a reliance on fossil fuels, renewable energy, particularly solar power, is emerging as a viable solution to bridge the country’s energy gap while addressing the challenges of climate change and environmental degradation.",
    //             header: 'Why Solar Power?'
    //         },

    //         {
    //             type: 'list', text: 'jdaljlkj ahell afldhlje', title: '', list: [
    //                 'Abundant and Renewable: Solar energy is a limitless resource that can be harnessed anywhere in the country, especially in the northern regions where sunlight is most intense.',
    //                 'Environmentally Friendly: Unlike fossil fuels, solar power generates electricity without emitting greenhouse gases or pollutants, contributing to Nigeria’s efforts to combat climate change.',
    //                 'Cost - Effective: The cost of solar technology has been steadily decreasing, making it an affordable option for both urban and rural communities.Over time, solar energy systems offer significant savings on electricity bills.'
    //             ],
    //             numbered: true
    //         },

    //         {
    //             type: 'paragraph',
    //             text: 'While Nigeria has historically relied on oil and gas for energy, the government and private sector are increasingly investing in renewable energy projects. The country’s Renewable Energy Master Plan (REMP) sets ambitious targets for increasing the share of renewable energy in the national energy mix, with a focus on solar, wind, and hydropower.', header: 'The State of Renewable Energy in Nigeria'
    //         },

    //         {
    //             type: 'list', title: 'Notable solar initiatives include:', list: [
    //                 'Solar Nigeria Project: This initiative, funded by the UK government, aims to provide affordable solar energy to schools, hospitals, and households in off - grid communities.', 'Nigerian Electrification Project(NEP): This World Bank - funded project focuses on expanding access to clean energy, including solar, in rural areas and under - served regions.'
    //             ],
    //             numbered: false
    //         },
    //         {
    //             type: 'paragraph',
    //             text: 'Despite the potential, the widespread adoption of solar energy in Nigeria faces several challenges:', header: 'Challenges and Opportunities'
    //         },
    //         {
    //             type: 'list', title: 'Notable solar initiatives include:', list: [
    //                 'High Initial Costs: While the cost of solar technology is dropping, the initial investment for solar panels and infrastructure remains high for many Nigerians.', 'Policy and Regulatory Hurdles: Clear government policies and incentives are needed to encourage greater investment in solar power.', 'Infrastructure: Nigeria’s energy infrastructure is underdeveloped, particularly in rural areas where solar power could have the most impact.'
    //             ],
    //             numbered: false
    //         },
    //         {
    //             type: 'paragraph',
    //             text: 'However, with continued investment, policy support, and technological advancements, solar power could revolutionize Nigeria’s energy landscape.', header: ''
    //         },
    //         {
    //             type: 'paragraph',
    //             text: 'Solar power and renewable energy are essential to Nigeria’s future. By embracing solar energy, the country can reduce its dependence on fossil fuels, meet its growing energy demands, and create a cleaner, more sustainable environment. The transition to renewable energy is not just an environmental imperative—it’s a key driver of economic growth, energy independence, and improved quality of life for millions of Nigerians.', header: 'Conclusion'
    //         },
    //     ]
    // }



    const share = [
        {
            icon: faFacebook,
            link: '#',
            color: 'text-blue-600'
        },
        {
            icon: faInstagram,
            link: '#',
            color: 'text-brown-600'
        },
        {
            icon: faXTwitter,
            link: '#',
            color: 'text-black'
        },

        {
            icon: faLinkedin,
            link: '#',
            color: 'text-slate-600'
        }
    ]


    return (
        <div className='flex flex-col justify-between px-8'>

            <div className='flex-1 pb-20 flex gap-8 justify-between items-baseline'>
                <Cblog blog={blog} />
                <Share  />
            </div>
            <Share mobile={true}/>
            <div className='pb-10'>
                <h2 className='md:mb-10 text-2xl font-bold text-green-800 mb-10'>More Climate Change Articless</h2>
                <BlogList recommended={true} />
            </div>
        </div>
    )
}

export default BlogPost