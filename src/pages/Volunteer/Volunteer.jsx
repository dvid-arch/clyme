import React from 'react';

const Volunteer = () => {
  return (
    <div className="  py-20 flex flex-col md:flex-row gap-8 px-8 ">
            <div className="max-w-4xl mx-auto flex-1  ">
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
    // <div className="min-h-screen bg-gray-100 p-6">
    //   <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    //     <h1 className="text-3xl font-bold text-green-600 mb-4">Join Our Climate Change Initiative</h1>
    //     <p className="text-lg text-gray-700 mb-6">
    //       We are always looking for passionate individuals to join us in the fight against climate change. Whether you have a few hours to spare or can commit to a longer-term role, there's a place for you in our community.
    //     </p>
        
    //     <h2 className="text-2xl font-semibold text-green-500 mb-4">Volunteer Opportunities</h2>
    //     <ul className="list-disc list-inside text-gray-700 mb-6">
    //       <li className="mb-2">Tree Planting Events</li>
    //       <li className="mb-2">Community Clean-ups</li>
    //       <li className="mb-2">Educational Workshops</li>
    //       <li className="mb-2">Social Media Advocacy</li>
    //       <li className="mb-2">Fundraising Campaigns</li>
    //     </ul>
        
    //     <h2 className="text-2xl font-semibold text-green-500 mb-4">Get Involved</h2>
    //     <p className="text-lg text-gray-700 mb-6">
    //       Ready to make a difference? Fill out the form below, and we'll get in touch with you shortly. Together, we can create a healthier planet for future generations.
    //     </p>
        
    //     <form className="space-y-4">
    //       <div>
    //         <label htmlFor="name" className="block text-gray-700">Full Name</label>
    //         <input type="text" id="name" className="w-full mt-1 p-2 border border-gray-300 rounded" />
    //       </div>
          
    //       <div>
    //         <label htmlFor="email" className="block text-gray-700">Email Address</label>
    //         <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded" />
    //       </div>
          
    //       <div>
    //         <label htmlFor="interests" className="block text-gray-700">Areas of Interest</label>
    //         <select id="interests" className="w-full mt-1 p-2 border border-gray-300 rounded">
    //           <option>Tree Planting</option>
    //           <option>Community Clean-ups</option>
    //           <option>Educational Workshops</option>
    //           <option>Social Media Advocacy</option>
    //           <option>Fundraising Campaigns</option>
    //         </select>
    //       </div>
          
    //       <div>
    //         <label htmlFor="message" className="block text-gray-700">Additional Message</label>
    //         <textarea id="message" className="w-full mt-1 p-2 border border-gray-300 rounded" rows="4"></textarea>
    //       </div>
          
    //       <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Volunteer;
