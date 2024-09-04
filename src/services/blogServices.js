// src/services/blogService.js

// src/services/blogService.js
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/firebase-config";

const blogCollectionRef = collection(db, 'blogs');

export const createBlog = async (blog) => {
  await addDoc(blogCollectionRef, blog);
};

export const getBlogs = async () => {
  const snapshot = await getDocs(blogCollectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateBlog = async (id, updatedBlog) => {
  const blogDoc = doc(db, 'blogs', id);
  await updateDoc(blogDoc, updatedBlog);
};

export const deleteBlog = async (id) => {
  const blogDoc = doc(db, 'blogs', id);
  await deleteDoc(blogDoc);
};
