import React from 'react';
import FormComponent from '../../components/Form';

const Membership = () => {
    return (
        <div className="  py-20 flex gap-8 px-8 ">
            <div className="max-w-4xl mx-auto flex-1  p-8 ">
                <div className='bg-white p-4  rounded-md shadow-md'>

                    <h1 className="text-3xl font-bold text-black mb-4">Become a Member</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Join our community of dedicated individuals committed to making a difference in the fight against climate change. As a member, you'll receive exclusive benefits and opportunities to get involved.
                    </p>
                </div>

                <div className='bg-white shadow-md p-4  rounded-md mt-10'>

                    <h2 className="text-2xl font-semibold text-black mb-4">Membership Benefits</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li className="mb-2">Regular updates and newsletters</li>
                        <li className="mb-2">Access to member-only events and webinars</li>
                        <li className="mb-2">Opportunities to participate in special projects</li>
                        <li className="mb-2">Discounts on merchandise and events</li>
                    </ul>
                </div>



            </div>
            <div className='max-w-[80ch] mx-auto flex-1  p-6 rounded-lg backdrop-blur-lg backdrop-opacity-5 bg-white shadow-lg px-8 items-center flex flex-col justify-center'>
                <h2 className="text-4xl font-semibold text-black mb-4 ">Join Us</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Ready to become a member? click below to get started.
                </p>

                <button className='bg-green-500 text-white text-[21px] py-2 px-8'>Become a Member</button>
                
            </div>
        </div>
    );
};

export default Membership;
