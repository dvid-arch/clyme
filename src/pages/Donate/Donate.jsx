import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from "@fortawesome/free-solid-svg-icons"

function Donate() {
    return (
        <div className="">
            <div className="pt-20 pb-48 px-8 bg-teal-950 text-white">

                <h1 className="text-4xl sm:text-6xl md:text-7xl capitalize text-center mb-6 tracking-tighter">Become a climate champion</h1>
                <p className="text-center">Help Us Make more Impact</p>

            </div>
            <div className="bg-white  relative py-28 ">
                <div className=" w-full absolute px-8 -top-28 left-0 right-0">
                    <h2 className="mb-4 text-2xl opacity-80 font-semibold text-white tracking-wide">You Deserve a Badge</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8   sm:px-8">
                        <div className="border bg-gradient-to-l  shadow-md pt-4 bg-white  border-cyan-400 hover:scale-90 transition-all rounded-md  text-center">
                            <FontAwesomeIcon icon={faMedal} className="text-8xl"/>
                            <h3 className=" ">Gold</h3>
                            <p className="font-semibold tracking-widest text-xl mb-4 text-teal-400">$1000</p>
                            <button className="py-2 font-semibold tracking-wide text-xl w-full px-8 border bg-teal-300">Donate</button>
                        </div>
                        <div className="border bg-gradient-to-l  shadow-md pt-4 bg-white  border-cyan-400 hover:scale-90 transition-all rounded-md  text-center">
                            <FontAwesomeIcon icon={faMedal} className="text-8xl text-gray-300"/>
                            <h3 className=" ">Gold</h3>
                            <p className="font-semibold tracking-widest text-xl mb-4 text-teal-400">$1000</p>
                            <button className="py-2 font-semibold tracking-wide text-xl w-full px-8 border bg-teal-300">Donate</button>
                        </div>
                        <div className="border bg-gradient-to-l  shadow-md pt-4 bg-white  border-cyan-400 hover:scale-90 transition-all rounded-md  text-center">
                            <FontAwesomeIcon icon={faMedal} className="text-8xl text-slate-500"/>
                            <h3 className=" ">Gold</h3>
                            <p className="font-semibold tracking-widest text-xl mb-4 text-teal-400">$1000</p>
                            <button className="py-2 font-semibold tracking-wide text-xl w-full px-8 border bg-teal-300">Donate</button>
                        </div>
                        <div className="border bg-gradient-to-l  shadow-md pt-4 bg-white  border-cyan-400 hover:scale-90 transition-all rounded-md  text-center">
                            <FontAwesomeIcon icon={faMedal} className="text-8xl text-yellow-500"/>
                            <h3 className=" ">Gold</h3>
                            <p className="font-semibold tracking-widest text-xl mb-4 text-teal-400">$1000</p>
                            <button className="py-2 font-semibold tracking-wide text-xl w-full px-8 border bg-teal-300">Donate</button>
                        </div>
                       

                    </div>
                </div>

                <div className="py-40  mx-auto px-4 sm:px-8">
                    <h2 className="mb-6 text-2xl text-center font-semibold capitalize">Support an upcomming project</h2>
                    <div className="grid md:grid-cols-2 gap-8 ">
                        <div className="p-4 shadow-slate-600  max-w-[500px] mx-auto ">
                            <div className="mb-2">
                                <div className="h-[300px] w-full bg-slate-400 "></div>
                            </div>
                            <h3 className="text-2xl mb-2">Carbon Footprint Reduction  Advocacy</h3>
                            <h4 className="font-bold text-teal-700">24th June 2024</h4>
                            <h5 className="text-slate-600 mb-4">Lagos, Nigeria</h5>

                            <p className="mb-1"><span className="text-orange-700 font-bold">$400</span> of <span className="text-teal-950 font-bold text-xl">$5000</span> raised so far</p>
                            <div className="h-2 w-full rounded-full bg-orange-300">
                                <span className="h-2 w-[40%] rounded-full bg-orange-800 block"></span>
                            </div>
                            <br />
                            <p className="text-orange-700">24 days till Event</p>
                            <button className=" py-2 px-8 block text-center text-xl tracking-wider font-semibold bg-teal-400 mt-4">Donate</button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Donate