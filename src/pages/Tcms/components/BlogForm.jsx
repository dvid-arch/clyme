// src/components/BlogForm.js
import { useState, useEffect } from 'react';
import { createBlog, updateBlog } from '../../../services/blogServices';

const BlogForm = ({ editingBlog, setEditingBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, content };

    if (editingBlog) {
      await updateBlog(editingBlog.id, blog);
    } else {
      await createBlog(blog);
    }

    setTitle('');
    setContent('');
    setEditingBlog(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      ></textarea>
      <button type="submit">{editingBlog ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default BlogForm;
