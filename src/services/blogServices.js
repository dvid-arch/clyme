// src/services/blogService.js

// src/services/blogService.js
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, getDoc, query, limit } from 'firebase/firestore';
import { db } from "../firebase/firebase-config";

const blogCollectionRef = collection(db, 'blogs');

export const createBlog = async (blog) => {
  await addDoc(blogCollectionRef, blog);
};

export const getFirstBlog = async () => {
  const blogCollectionRef = collection(db, "blogs"); // Adjust to your collection name
  const q = query(blogCollectionRef, limit(1)); // Limit to 1 document

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0]; // Get the first document
    const { title, blogBody, img } = doc.data();
    console.log('reached', title)
    return { id: doc.id, title, blogBody, img };
  } else {
    console.error("No documents found!");
    return null;
  }
};


export const getBlogById = async (id) => {
  const docRef = doc(db, "blogs", id); // Adjust "blogPost" to your collection name
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { title, blogBody, img } = docSnap.data();
    return { id: docSnap.id, title, blogBody, img };
  } else {
    console.error("No such document!");
    return null;
  }
};

export const getBlogs = async () => {
  const snapshot = await getDocs(blogCollectionRef);

  return snapshot.docs.map((doc) => {
    const { title, blogBody, img } = { ...doc.data() }

    return ({ id: doc.id, title, blogBody, img }

    )
  });
};

export const updateBlog = async (id, updatedBlog) => {
  const blogDoc = doc(db, 'blogs', id);
  await updateDoc(blogDoc, updatedBlog);
};

export const deleteBlog = async (id) => {
  const blogDoc = doc(db, 'blogs', id);
  await deleteDoc(blogDoc);
};
