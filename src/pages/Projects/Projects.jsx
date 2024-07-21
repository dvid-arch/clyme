function Projects() {
    return (
        <div>
            <div className="text-center  flex flex-col justify-center bg-teal-600 pt-20">
                <h1 className="text-6xl mb-4">We are taking Responsibility</h1>
                <p>See some of the projects we have completed so far</p>
                <div className="p-14 bg-black mt-10"></div>
            </div>
            <div className="flex justify-center gap-6 py-4 px-8 bg-slate-200">
                <a href="#" className="inline-block py-1 px-6 border rounded-full border-cyan-400 bg-cyan-300">All</a>
                <a href="#" className="inline-block py-1 px-6 border rounded-full border-cyan-400">Nigeria</a>
                <a href="#" className="inline-block py-1 px-6 border rounded-full border-cyan-400">Rwanda</a>
                <a href="#" className="inline-block py-1 px-6 border rounded-full border-cyan-400">Ghana</a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-8 px-8 pt-10">
                <div className="px-8 pt-10 border shadow-md p-4">
                   <img src="" alt="" className="h-40"/>
                   <p>Rwanda Climate Sensitization program</p>
                </div>
                <div className="px-8 pt-10 border shadow-md p-4">
                   <img src="" alt="" className="h-40"/>
                   <p>Rwanda Climate Sensitization program</p>
                </div>
                <div className="px-8 pt-10 border shadow-md p-4">
                   <img src="" alt="" className="h-40"/>
                   <p>Rwanda Climate Sensitization program</p>
                </div>
                <div className="px-8 pt-10 border shadow-md p-4">
                   <img src="" alt="" className="h-40"/>
                   <p>Rwanda Climate Sensitization program</p>
                </div>
                <div className="px-8 pt-10 border shadow-md p-4">
                   <img src="" alt="" className="h-40"/>
                   <p>Rwanda Climate Sensitization program</p>
                </div>
                <div className="px-8 pt-10 border shadow-md p-4">
                   <img src="" alt="" className="h-40"/>
                   <p>Rwanda Climate Sensitization program</p>
                </div>
            </div>
        </div>
    )
}

export default Projects