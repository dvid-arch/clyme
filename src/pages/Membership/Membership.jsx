import React from 'react';
import FormComponent from '../../components/Form';

const Membership = () => {
    return (
        <div className="bg-gray-200  py-20 flex gap-8 px-8">
            <div className="max-w-4xl mx-auto flex-1  p-8 ">
                <h1 className="text-3xl font-bold text-purple-600 mb-4">Become a Member</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Join our community of dedicated individuals committed to making a difference in the fight against climate change. As a member, you'll receive exclusive benefits and opportunities to get involved.
                </p>

                <h2 className="text-2xl font-semibold text-purple-500 mb-4">Membership Benefits</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li className="mb-2">Regular updates and newsletters</li>
                    <li className="mb-2">Access to member-only events and webinars</li>
                    <li className="mb-2">Opportunities to participate in special projects</li>
                    <li className="mb-2">Discounts on merchandise and events</li>
                </ul>



            </div>
            <div className='max-w-[80ch] mx-auto flex-1 bg-white p-6 rounded-lg shadow-lg px-8'>
                <h2 className="text-2xl font-semibold text-purple-500 mb-4">Join Us</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Ready to become a member? Fill out the form below to start your journey with us.
                </p>

                <form className="space-y-4 ">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Full Name</label>
                        <input type="text" id="name" className="w-full mt-1 p-2 border border-gray-300 rounded" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email Address</label>
                        <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded" />
                    </div>

                    <div>
                        <label htmlFor="membershipType" className="block text-gray-700">Membership Type</label>
                        <select id="membershipType" className="w-full mt-1 p-2 border border-gray-300 rounded">
                            <option>Standard</option>
                            <option>Premium</option>
                            <option>Student</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700">Additional Message</label>
                        <textarea id="message" className="w-full mt-1 p-2 border border-gray-300 rounded" rows="4"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Membership;
