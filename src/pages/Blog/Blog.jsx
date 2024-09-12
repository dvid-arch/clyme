import { Link } from 'react-router-dom'
import proj from '../../assets/proj.jpg'
import BlogList from './BlogList'
import { getFirstBlog } from '../../services/blogServices'
import { useEffect, useState } from 'react';

function Blog() {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            const fetchedBlog = await getFirstBlog();
            console.log(fetchedBlog)
            setBlog(fetchedBlog);
            setLoading(false);
        };

        fetchBlog();
    }, []);

    return (
        <div className="pt-10">
            <div className='px-8'>

                <h1 className="font-semibold text-4xl sm:text-6xl   text-center mb-4">Lets Talk Climate Change</h1>
                <p className="text-center text-[18px]">stay updated about climate change issues around you</p>
            </div>
            <div className="px-8 mt-10 py-8 bg-braccent ">
                <h2 className="text-3xl text-brwhite font-bold mb-6">Today's Pick</h2>
                <div className="flex flex-col-reverse gap-8 md:flex-row items-center">

                    <div className="flex-2">
                        <h3 className="opacity-80 text-4xl capitalize max-w-[600px] mb-4 font-semibold">
                            {blog?.title}
                        </h3>

                        <p className="my-4 max-w-[600px] text-[18px] opacity-70 ">{blog?.blogBody[0].text}</p>

                        <h5 className='text-sm opacity-70'>25th June 2024</h5>
                        <Link to={'/blogpost'} className='bg-white/40 underline w-fit text-black block px-4 py-1 mt-6 font-bold text-black/70'>Read Article</Link>
                    </div>
                    <div className='flex-1'>
                        <img src={blog?.img} alt="" className=' w-[100%] block rounded-md md:w-[80%]' />
                    </div>
                </div>
            </div>
            <section className='pt-20 pb-10 px-8'>
                <h2 className="text-3xl font-bold mb-12">More Climate Change Articles</h2>
                <BlogList />
            </section>
        </div>
    )
}

export default Blog