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
            <div className='max-w-[80ch] mx-auto flex-1  p-6 rounded-lg backdrop-blur-lg backdrop-opacity-5 bg-white shadow-lg px-8'>
                <h2 className="text-2xl font-semibold text-black mb-4">Join Us</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Ready to become a member? Fill out the form below to start your journey with us.
                </p>


                <form className="block max-w-[500px]">
                    <div className="input-controller mb-4">
                        <label htmlFor="name" className="capitalize mb-2 block">name:</label>
                        <input type="text" placeholder="full name" className="border shadow-sm block w-full px-6 py-2 rounded-md" />
                    </div>
                    <div className="input-controller">
                        <label htmlFor="name" className="capitalize mb-4 block">email:</label>
                        <input type="text" placeholder="email address" className="border shadow-sm block w-full px-6 py-2 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="membershipType" className="mb-2 block text-gray-700">Membership Type</label>
                        <select id="membershipType" className="w-full mt-1 p-2 border border-gray-300 rounded">
                            <option>Standard</option>
                            <option>Premium</option>
                            <option>Student</option>
                        </select>
                    </div>

                    <div className="input-controller">
                        <label htmlFor="name" className="capitalize mb-2 block">Additional Message</label>
                        <textarea type="text" placeholder="share message" className="border shadow-sm block w-full px-6 py-2 rounded-md" cols={50} rows={6}></textarea>
                    </div>
                    <button className="py-2 px-8 my-4 block mx-auto bg-cyan-300 rounded-md">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Membership;
