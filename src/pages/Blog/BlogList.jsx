// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import { getBlogs, deleteBlog } from '../../services/blogServices';
import { Link } from 'react-router-dom';

const List = ({blogs}) => {
  return (
    <div className=' grid gap-12 sm:grid-cols-3 md:grid-cols-4 '>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div className=''>
            <div className='min-h-[150px] overflow-hidden bg-center  bg-no-repeat bg-cover' style={{ backgroundImage: `url(${blog.img})` }}>

            </div>
            <div className='mt-2'>
              {/* <h5 className='text-sm'>{blog.date}</h5> */}
              <a href={`/blog/${blog.id}`} className='text-xl font-semibold underline underline-offset-4   mb-2'>{blog.title}</a>

            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

const BlogList = ({recommended }) => {
  const [blogs, setBlogs] = useState([]);
  const maxOnRecommended = 4

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

  return recommended ? <List blogs={blogs.slice(0,maxOnRecommended)} /> : <List blogs={blogs.slice(0,20)} />;
};

export default BlogList;
