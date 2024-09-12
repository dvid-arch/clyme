import React from 'react';

const Partner = () => {
  return (
    <div className="  py-20 flex justify-center gap-8 px-8">
      <div className="max-w-4xl bg-white shadow-md mx-auto flex-1  p-8 ">
        <h1 className="text-3xl font-bold  mb-4">Partner with Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our partnerships are essential in advancing our mission to combat climate change. We collaborate with organizations, businesses, and communities to drive impactful projects and initiatives.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Partner with Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">Enhance your corporate social responsibility</li>
          <li className="mb-2">Increase your brand's visibility and credibility</li>
          <li className="mb-2">Join a network of like-minded organizations</li>
          <li className="mb-2">Contribute to meaningful environmental change</li>
        </ul>


      </div>
      <div className='max-w-[80ch] mx-auto flex-1  p-6 rounded-lg backdrop-blur-lg backdrop-opacity-5 bg-white shadow-lg px-8 items-center flex flex-col justify-center'>
        <h2 className="text-4xl font-semibold text-black mb-4 ">Join Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to become a partner? click below to get started.
        </p>

        <button className='bg-green-500 text-white text-[21px] py-2 px-8'>Partner</button>

      </div>
    </div>

  );
};

export default Partner;
