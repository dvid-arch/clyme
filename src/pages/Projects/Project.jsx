import proj from '../../assets/proj.jpg'

const ProjectPage = () => {
    return (
        <div className="py-8">
            <div className="mb-8 md:flex gap-8 px-8 py-20">
                <div className="h-[300px] w-full flex-1 bg-slate-500">

                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">Reforesting the Amazon</h1>
                    <p className="mt-2 text-lg text-gray-700">A crucial project aimed at restoring degraded areas of the Amazon rainforest, reducing carbon emissions, and preserving biodiversity.</p>
                </div>

            </div>
            <div className="flex flex-col md:flex-row gap-8 pt-20 pb-10 bg-teal-300 px-8">

                <div className=" flex-1">
                    <h2 className="text-3xl font-semibold ">Objectives</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                        <li>Replant 1 million trees over the next five years.</li>
                        <li>Engage local communities in sustainable forest management.</li>
                        <li>Reduce CO2 levels by 200,000 tons annually.</li>
                    </ul>
                </div>
                <div className=" flex-1">
                    <h2 className="text-3xl font-semibold ">Problem Statement</h2>
                    <p className="mt-2 text-gray-700">Deforestation in the Amazon has reached critical levels, contributing to global warming and loss of biodiversity.</p>
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl font-semibold ">Context</h2>
                    <p className="mt-2 text-gray-700">The Amazon rainforest, known as the "lungs of the Earth," plays a vital role in regulating the global climate. However, it is being destroyed at an alarming rate due to logging, agriculture, and mining.</p>
                </div>
            </div>



            <section className="">
                <div className="flex flex-col md:flex-row items-center gap-8 relative py-20 px-8">
                    <div className="flex-1 sm:absolute z-10 w-full md:static bottom-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-semibold  mb-6">Project Details</h2>
                        <p className="mt-2 mx-auto md:mx-0 sm:text-white md:text-black text-[18px] max-w-[500px]">Our project involves replanting native tree species in deforested areas, working with local communities to promote sustainable practices, and monitoring the growth and health of the new forests.</p>
                    </div>
                    <div className="flex-1 relative after:absolute after:w-full after:top-0 after:left-0 after:h-full sm:after:bg-teal-950 md:after:bg-transparent after:opacity-65">
                        <img src={proj} className='w-full rounded-md' alt="" />
                    </div>
                </div>
                <div className=" bg-teal-200 px-8">
                    <div className="flex-1 py-10">
                        <h3 className="text-2xl font-semibold text-green-500">Timeline</h3>
                        <div className="mt-2  text-gray-700 bg-blue-20 flex flex-col md:flex-row  gap-12 sm:gap-8">
                            <div className="flex-1 flex gap-4">
                                <div className="h-[200px] min-w-[150px] flex-1 bg-gray-500"></div>
                                <p className='flex-1'>Phase 1: Initial Planning and Community Engagement (Jan - Jun 2024)</p>
                            </div>
                            <div className="flex-1 flex flex-row-reverse md:flex-row gap-4">
                                <div className="h-[200px] min-w-[150px] flex-1 bg-gray-500"></div>
                                <p className='flex-1'>Phase 1: Initial Planning and Community Engagement (Jan - Jun 2024)</p>
                            </div>
                            <div className="flex-1 flex gap-4">
                                <div className="h-[200px] flex-1 bg-gray-500"></div>
                                <p className='flex-1'>Phase 1: Initial Planning and Community Engagement (Jan - Jun 2024)</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-4 py-20 px-8">
                    <h3 className="text-2xl font-semibold text-green-500 mb-6">Team</h3>
                    <div className="mt-2 list-disc list-inside blog md:flex gap-8 text-gray-700">
                        <div className='grid grid-cols-2 max-w-[400px] gap-4 '>
                            <div className="bg-orange-50 p-4">
                                <div className="h-32"></div>
                                <p>Dr. Jane Smith, Lead Ecologist</p>
                            </div>
                            <div className="bg-orange-50 p-4">
                                <div className="h-32"></div>
                                <p>Dr. Jane Smith, Lead Ecologist</p>
                            </div>
                        </div>

                        <div className="bg-black flex-1 min-h-[200px] mt-6">

                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8 px-8 pt-10 py-20">
                <div className="sm:flex  items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold ">Impact and Benefits</h2>
                        <p className="mt-2 text-gray-700 max-w-[500px]">Our pilot project in Peru resulted in the successful reforestation of 1000 hectares and significant community benefits.</p>
                        <p className="mt-2 text-gray-700 font-semibold">Expected Impact:</p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                            <li>Restoration of 5000 hectares of rainforest.</li>
                            <li>Creation of sustainable livelihoods for 200 local families.</li>
                            <li>Significant reduction in carbon emissions.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div className="h-[400px] bg-slate-400 "></div>
                    </div>
                </div>
            </section>

            <section className="mb-8 text-center p-8 bg-orange-400">
                <h2 className="text-3xl font-semibold text-white">Get Involved</h2>
                <p className="mt-2 text-gray-700">Donate to support our planting efforts. Join us as a volunteer and help with reforestation activities.</p>
                <button className="mt-4 bg-cyan-700 text-white py-2 px-4 rounded">Donate Now</button>
                <button className="mt-4 ml-4 bg-cyan-500 text-white py-2 px-4 rounded">Volunteer</button>
            </section>

            <div className='flex flex-col sm:flex-row gap-8 px-8 py-20'>
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold ">Resources</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                        <li><a href="#" className="text-green-500 underline">Detailed project report</a></li>
                        <li><a href="#" className="text-green-500 underline">Research on Amazon deforestation</a></li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold ">Contact Information</h2>
                    <p className="mt-2 text-gray-700">Email: contact@reforestamazon.org</p>
                    <p className="mt-2 text-gray-700">Phone: +1-234-567-890</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
