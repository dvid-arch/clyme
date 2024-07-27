import heroImg from '../../assets/heroImg.png'
import Mteam from './MTeam'

function About() {
    return (
        <div className="px-8 py-10">
            <div className="flex flex-col-reverse md:flex-row gap-8">
                <div className="vid-box w-full max-w-[600px] h-[400px] bg-slate-500 rounded-xl relative">
                    <div className="play h-8 w-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white"></div>
                </div>
                <div>
                    <h2 className="text-4xl sm:text-6xl max-w-[500px] leading-tight font-semibold">One <br />Carbon-Footprint at a time
                    </h2>
                    <p className="my-4 max-w-[600px] text-[17px] leading-loose">Clyme is a forward-thinking climate tech company committed to addressing climate change in Africa through ground breaking technology. Our mission is to empower individuals to make eco-friendly choices by introducing an app that incentivizes users for maintaining a carbon footprint below a monthly limit.</p>
                </div>

            </div>
            <section>
                <div className="pt-20">
                    <div className="flex flex-col md:flex-row gap-8">

                        <div className="flex-1">
                            <h2 className="text-4xl mb-4 font-semibold text-le">Our Mission</h2>
                            <p className="max-w-[400px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam praesentium odit libero doloremque quaerat, fugit explicabo debitis expedita similique quo voluptatum nam aperiam eius vitae aliquid beatae fugiat alias?</p>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl mb-4 font-semibold">Our Vision</h2>
                            <p className="max-w-[400px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam praesentium odit libero doloremque quaerat, fugit explicabo debitis expedita similique quo voluptatum nam aperiam eius vitae aliquid beatae fugiat alias?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pt-20">
                    <h2 className="text-4xl font-semibold mb-10">ART Solution</h2>
                   
                </div>
            </section>
            <Mteam />
        </div>
    )
}

export default About