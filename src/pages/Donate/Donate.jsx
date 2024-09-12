import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from "@fortawesome/free-solid-svg-icons"

function Donate() {
    return (
        <div className=" py-20  text-slate-800">
            <div className="mb-10 px-8 text-center">
                <h1 className="text-6xl mb-6 font-bold">Support Our Cause</h1>
                <p className="text-[18px] mx-auto max-w-[400px]">Your contributions help us make a difference. Thank you for your generosity!</p>
            </div>
            <section className="bg-brgreen/20 py-10 px-8">
                <div className="bg-white p-4 rounded-md max-w-[800px] mx-auto">
                    <h2 className="text-4xl font-semibold mb-4">How to Donate</h2>
                    <p className="text-[18px] mb-4 text-black/80 max-w-[400px]">We currently accept donations via direct bank transfer. Please follow the instructions below:</p>

                    <div>
                        <p className="font-bold my-6 text-[18px]">
                            Bank Name: <span className="font-normal">Access Bank</span>
                            <br />
                            Account Number: <span className="font-normal">12345678</span>
                            <br />
                            Account Name: <span className="font-normal">12345678</span>
                        </p>
                    </div>
                </div>

            </section>
            
        </div>
    )
}

export default Donate