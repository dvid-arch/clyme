function Contact() {
    return (
        <div className="px-8 pt-10">
            <section className=" flex flex-col md:flex-row gap-8">
                <div className="flex-1 pr-8">
                    <h2 className="md:text-6xl text-4xl font-semibold mb-4  ">Contact Us</h2>
                    <p className="text-lg max-w-[500px]">We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
            
                    <div className="w-full  mt-10 bg-orange-100 p-2 md:px-8 md:py-4 rounded-md flex flex-col gap-2 text-left">
                        <p className="text-lg"><strong>Address:</strong> 123 Climate Tech Avenue, Eco City, AC 12345</p>
                        <p className="text-lg"><strong>Phone:</strong> +123 456 7890</p>
                        <p className="text-lg"><strong>Email:</strong> info@clyme.com</p>
                    </div>
                </div>
                <div className="flex-1">
                    <form className="block max-w-[500px]">
                        <div className="input-controller mb-4">
                            <label htmlFor="name" className="capitalize mb-2 block">name:</label>
                            <input type="text" placeholder="full name" className="border shadow-sm block w-full px-6 py-2 rounded-md" />
                        </div>
                        <div className="input-controller">
                            <label htmlFor="name" className="capitalize mb-2 block">name:</label>
                            <input type="text" placeholder="email address" className="border shadow-sm block w-full px-6 py-2 rounded-md" />
                        </div>
                        <div className="input-controller">
                            <label htmlFor="name" className="capitalize mb-2 block">Message</label>
                            <textarea type="text" placeholder="share message" className="border shadow-sm block w-full px-6 py-2 rounded-md" cols={50} rows={6}></textarea>
                        </div>
                        <button className="py-2 px-8 my-4 block mx-auto bg-cyan-300 rounded-md">Send Message</button>
                    </form>
                </div>
            </section>
            
        </div>
    )
}

export default Contact;
