import React, { useState } from 'react';

// Sample team data
const team = [
    {
        name: 'Jane Smith',
        title: 'Chief Executive Officer',
        country: 'USA',
        details: 'Jane is a visionary leader with over 20 years of experience in environmental advocacy. She spearheads our initiatives with a passion for sustainable development and climate action.'
    },
    {
        name: 'Michael Brown',
        title: 'Chief Operations Officer',
        country: 'USA',
        details: 'With a background in environmental science and a knack for strategic planning, Michael ensures our operations run smoothly and efficiently, driving impactful results.'
    },
    {
        name: 'Aisha Khan',
        title: 'Chief Technology Officer',
        country: 'Pakistan',
        details: 'Aisha brings innovative technological solutions to our climate challenges. Her expertise in renewable energy technologies and smart grids is instrumental in our mission.'
    },
    {
        name: 'Carlos Rodríguez',
        title: 'Chief Financial Officer',
        country: 'Spain',
        details: 'Carlos manages our financial strategies with a focus on transparency and sustainability. His work ensures that our resources are used effectively to maximize our impact.'
    },
    {
        name: 'Sofia Martins',
        title: 'Project Coordinator',
        country: 'Brazil',
        details: 'Sofia coordinates reforestation projects in the Amazon rainforest, working closely with local communities to promote sustainable land management.'
    },
    {
        name: 'Liam O\'Connor',
        title: 'Environmental Scientist',
        country: 'Ireland',
        details: 'Liam conducts cutting-edge research on the impacts of climate change on marine ecosystems, contributing vital data to our global initiatives.'
    },
    {
        name: 'Mei Ling Chen',
        title: 'Communications Specialist',
        country: 'China',
        details: 'Mei Ling leads our outreach programs in Asia, raising awareness about climate change through compelling storytelling and media campaigns.'
    },
    {
        name: 'Raj Patel',
        title: 'Renewable Energy Engineer',
        country: 'India',
        details: 'Raj designs and implements renewable energy systems in rural areas, providing sustainable power solutions to communities in need.'
    },
    {
        name: 'Elena Petrova',
        title: 'Climate Policy Analyst',
        country: 'Russia',
        details: 'Elena analyzes climate policies and their implications, helping shape our advocacy efforts on an international scale.'
    },
    {
        name: 'Fatima El Hassan',
        title: 'Community Engagement Officer',
        country: 'Morocco',
        details: 'Fatima works with local communities in North Africa to develop and implement climate resilience projects, fostering grassroots support for our mission.'
    },
    {
        name: 'Tom Nguyen',
        title: 'Data Scientist',
        country: 'Vietnam',
        details: 'Tom leverages big data to track climate trends and measure the effectiveness of our programs, ensuring we stay on the cutting edge of climate science.'
    },
    {
        name: 'Isabella Rossi',
        title: 'Sustainability Consultant',
        country: 'Italy',
        details: 'Isabella advises businesses and governments on sustainable practices, driving forward our agenda for a greener, more resilient future.'
    },
];

// Team Member component
const TeamMember = ({ member, onClick }) => (
    <div className='flex items-start gap-4 p-4' onClick={() => onClick(member)}>
        <div className='h-12 w-12 rounded-full border shadow-md '>

        </div>
        <div className=" cursor-pointer" >
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p>{member.title}</p>
            <p>{member.country}</p>
        </div>
    </div>
);

// Modal component
const Modal = ({ member, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">{member.name}</h2>
            <h3 className="text-lg font-semibold mb-2">{member.title}</h3>
            <p className="mb-4">{member.country}</p>
            <p>{member.details}</p>
            <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
        </div>
    </div>
);

const Mteam = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleClick = (member) => {
        setSelectedMember(member);
    };

    const handleClose = () => {
        setSelectedMember(null);
    };

    return (
        <div className="container mx-auto  py-8 px-8">
            <h1 className="text-4xl font-semibold  mb-8">Meet Our Team</h1>
            <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 mb-6">
                {team.map((member, index) => (
                    <TeamMember key={index} member={member} onClick={handleClick} />
                ))}
            </div>
            <div><button className='inline-block py-2 px-8 bg-cyan-400'>more</button></div>
            {selectedMember && <Modal member={selectedMember} onClose={handleClose} />}
        </div>
    );
};

export default Mteam;
