const ProjectPage = () => {
    return (
        <div className="container  py-8">
            <div className="mb-8 flex gap-8 px-8">
                <div className="h-[300px] flex-1 bg-slate-500">

                </div>
                <div className="flex-1">

                    <h1 className="text-4xl font-bold">Reforesting the Amazon</h1>
                    <p className="mt-2 text-lg text-gray-700">A crucial project aimed at restoring degraded areas of the Amazon rainforest, reducing carbon emissions, and preserving biodiversity.</p>
                </div>

            </div>
            <div className="grid grid-cols-3 gap-8 pt-20 pb-10 bg-teal-300 px-8">

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-600">Objectives</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                        <li>Replant 1 million trees over the next five years.</li>
                        <li>Engage local communities in sustainable forest management.</li>
                        <li>Reduce CO2 levels by 200,000 tons annually.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-600">Problem Statement</h2>
                    <p className="mt-2 text-gray-700">Deforestation in the Amazon has reached critical levels, contributing to global warming and loss of biodiversity.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-600">Context</h2>
                    <p className="mt-2 text-gray-700">The Amazon rainforest, known as the "lungs of the Earth," plays a vital role in regulating the global climate. However, it is being destroyed at an alarming rate due to logging, agriculture, and mining.</p>
                </section>
            </div>



            <section className="mb-8">
                <div className="flex items-center">
                    <div className="flex-1 h-[400px]"></div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold text-green-600">Project Details</h2>
                        <p className="mt-2 text-gray-700">Our project involves replanting native tree species in deforested areas, working with local communities to promote sustainable practices, and monitoring the growth and health of the new forests.</p>
                    </div>
                </div>
                <div className=" px-8">
                    <div className="mt-4 flex-1">
                        <h3 className="text-2xl font-semibold text-green-500 mt-6">Timeline</h3>
                        <div className="mt-2  text-gray-700 bg-blue-20 flex  gap-8">
                            <div className="flex-1">
                                <div className="h-[200px] bg-gray-500"></div>
                                <p>Phase 1: Initial Planning and Community Engagement (Jan - Jun 2024)</p>
                            </div>
                            <div className="flex-1">
                                <p>Phase 2: Reforestation Begins (Jul 2024 - Dec 2025)</p>
                            </div>
                            <div className="flex-1">
                                <p>Phase 3: Monitoring and Evaluation (2026 onwards)</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-4 px-8">
                    <h3 className="text-2xl font-semibold text-green-500 mb-6">Team</h3>
                    <div className="mt-2 list-disc list-inside text-gray-700 grid grid-cols-5 grid-rows-4 gap-8">
                        <div className="row-span-2 bg-orange-50 p-4">
                            <div className="h-40"></div>
                            <p>Dr. Jane Smith, Lead Ecologist</p>
                        </div>
                        <div className="row-span-2 bg-orange-50 p-4">
                            <div className="h-40"></div>
                            <p>Dr. Jane Smith, Lead Ecologist</p>
                        </div>

                        <div className="bg-black col-span-3 row-span-4">

                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8 px-8 pt-10">
                <div className="flex items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold text-green-600">Impact and Benefits</h2>
                        <p className="mt-2 text-gray-700 max-w-[500px]">Our pilot project in Peru resulted in the successful reforestation of 1000 hectares and significant community benefits.</p>
                        <p className="mt-2 text-gray-700 font-semibold">Expected Impact:</p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                            <li>Restoration of 5000 hectares of rainforest.</li>
                            <li>Creation of sustainable livelihoods for 200 local families.</li>
                            <li>Significant reduction in carbon emissions.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div className="h-[400px] bg-slate-400"></div>
                    </div>
                </div>
            </section>

            <section className="mb-8 text-center p-8 bg-orange-400">
                <h2 className="text-3xl font-semibold text-white">Get Involved</h2>
                <p className="mt-2 text-gray-700">Donate to support our planting efforts. Join us as a volunteer and help with reforestation activities.</p>
                <button className="mt-4 bg-cyan-700 text-white py-2 px-4 rounded">Donate Now</button>
                <button className="mt-4 ml-4 bg-cyan-500 text-white py-2 px-4 rounded">Volunteer</button>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-green-600">Resources</h2>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li><a href="#" className="text-green-500 underline">Detailed project report</a></li>
                    <li><a href="#" className="text-green-500 underline">Research on Amazon deforestation</a></li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-green-600">Contact Information</h2>
                <p className="mt-2 text-gray-700">Email: contact@reforestamazon.org</p>
                <p className="mt-2 text-gray-700">Phone: +1-234-567-890</p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-green-600">FAQ</h2>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>How can I contribute to the project?</li>
                    <li>What are the benefits of reforestation?</li>
                </ul>
            </section>
        </div>
    );
};

export default ProjectPage;
