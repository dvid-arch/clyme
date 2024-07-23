import React from 'react';

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Join Our Climate Change Initiative</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are always looking for passionate individuals to join us in the fight against climate change. Whether you have a few hours to spare or can commit to a longer-term role, there's a place for you in our community.
        </p>
        
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Volunteer Opportunities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">Tree Planting Events</li>
          <li className="mb-2">Community Clean-ups</li>
          <li className="mb-2">Educational Workshops</li>
          <li className="mb-2">Social Media Advocacy</li>
          <li className="mb-2">Fundraising Campaigns</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to make a difference? Fill out the form below, and we'll get in touch with you shortly. Together, we can create a healthier planet for future generations.
        </p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input type="text" id="name" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          
          <div>
            <label htmlFor="interests" className="block text-gray-700">Areas of Interest</label>
            <select id="interests" className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Tree Planting</option>
              <option>Community Clean-ups</option>
              <option>Educational Workshops</option>
              <option>Social Media Advocacy</option>
              <option>Fundraising Campaigns</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700">Additional Message</label>
            <textarea id="message" className="w-full mt-1 p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
