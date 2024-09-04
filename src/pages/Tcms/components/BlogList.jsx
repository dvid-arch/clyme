// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import { getBlogs, deleteBlog } from '../../../services/blogServices';

const BlogList = ({ setEditingBlog }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getBlogs();
      setBlogs(fetchedBlogs);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className='py-10 px-8 grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div className=''>
            <div className='max-h-[240px] overflow-hidden'>

              <img src={blog.imageUrl} alt="" className='w-full h-auto' />
            </div>
            <div className='mt-2'>
              <h3 className='text-2xl font-bold leading-none  mb-2'>{blog.header}</h3>
              <h4 className='font-semibold leading-tight mb-1'>{blog.author}</h4>
              <h5 className='text-sm'>{blog.date}</h5>
            </div>
          </div>
          <div className='flex gap-4 mt-4'>
            <button onClick={() => setEditingBlog(blog)} className='inline-block py-1 px-4 border bg-brblue'>Edit</button>
            <button onClick={() => handleDelete(blog.id)} className='inline-block py-1 px-4 border border-red-700 bg-red-100'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
