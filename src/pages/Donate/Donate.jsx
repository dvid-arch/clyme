import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from "@fortawesome/free-solid-svg-icons"

function Donate() {
    return (
        <div className="px-8 py-20 grid grid-cols-2 text-slate-800">
            <div>
                <h1 className="text-6xl mb-6 font-bold">Support Our Cause</h1>
                <p className="text-[18px] max-w-[400px]">Your contributions help us make a difference. Thank you for your generosity!</p>
            </div>
            <section>
                <h2 className="text-4xl font-semibold mb-4">How to Donate</h2>
                <p className="text-[18px] mb-4 text-black/80">We currently accept donations via direct bank transfer. Please follow the instructions below:</p>

                <div>
                    <p className="font-bold my-6 text-[18px]">
                        Bank Name: <span className="font-normal">Access Bank</span>
                        <br />
                        Account Number: <span className="font-normal">12345678</span>
                        <br />
                        Account Name: <span className="font-normal">12345678</span>
                    </p>
                </div>
            </section>
            <section className="col-span-2">
                <div className="w-full  mt-10 bg-orange-100 p-2 md:px-8 md:py-4 rounded-md flex flex-col gap-2 text-left">
                    <p className="text-lg"><strong>Address:</strong> 123 Climate Tech Avenue, Eco City, AC 12345</p>
                    <p className="text-lg"><strong>Phone:</strong> +123 456 7890</p>
                    <p className="text-lg"><strong>Email:</strong> info@clyme.com</p>
                </div>
            </section>
        </div>
    )
}

export default Donate