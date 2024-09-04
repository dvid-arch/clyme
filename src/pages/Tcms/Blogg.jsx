// src/App.js
import { useState } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

const Blogg = () => {
  const [editingBlog, setEditingBlog] = useState(null);

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogForm editingBlog={editingBlog} setEditingBlog={setEditingBlog} />
      <BlogList setEditingBlog={setEditingBlog} />
    </div>
  );
};

export default Blogg;
