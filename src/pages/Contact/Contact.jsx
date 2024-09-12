import mail from '../../assets/mail.png'

function Contact() {
    return (
        <div className=" pt-10">
            <section className="">
                <div className="">
                    <div className="text-center">
                        <h2 className="md:text-6xl text-4xl font-semibold mb-4  ">Contact Us</h2>
                        <p className="text-lg max-w-[600px] mx-auto">We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
                    </div>

                    <div className='flex flex-col-reverse md:flex-row items-center py-10 bg-blue-950/20 px-8 mt-10'>
                        <div className="w-full  mt-10 bg-orange-100/50 p-2 md:px-8 md:py-4 rounded-md flex flex-col gap-2 text-left flex-1">
                            <p className="text-lg"><strong>Address:</strong> 123 Climate Tech Avenue, Eco City, AC 12345</p>
                            <p className="text-lg"><strong>Phone:</strong> +123 456 7890</p>
                            <p className="text-lg"><strong>Email:</strong> info@clyme.com</p>
                        </div>

                        <div className="flex-1 text-center">
                            <img src={mail} alt=""className='w-40 mx-auto'/>
                            <button className='text-xl font-bold bg-green-500 py-2 border rounded-md px-8 text-white'>Send Mail Now</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact;
