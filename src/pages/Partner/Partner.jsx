import React from 'react';

const Partner = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Partner with Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our partnerships are essential in advancing our mission to combat climate change. We collaborate with organizations, businesses, and communities to drive impactful projects and initiatives.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Why Partner with Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">Enhance your corporate social responsibility</li>
          <li className="mb-2">Increase your brand's visibility and credibility</li>
          <li className="mb-2">Join a network of like-minded organizations</li>
          <li className="mb-2">Contribute to meaningful environmental change</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in partnering with us? Fill out the form below, and we will contact you to discuss how we can collaborate.
        </p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="organization" className="block text-gray-700">Organization Name</label>
            <input type="text" id="organization" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          
          <div>
            <label htmlFor="contactName" className="block text-gray-700">Contact Name</label>
            <input type="text" id="contactName" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full mt-1 p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Partner;
