// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
import { listAll } from "firebase/storage";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1z7buvRrytjKG9WFs0tyS6wLfjfQ7i8A",
  authDomain: "clymechange.firebaseapp.com",
  projectId: "clymechange",
  storageBucket: "clymechange.appspot.com",
  messagingSenderId: "907656912368",
  appId: "1:907656912368:web:0481b56ea1994f81ffd135",
  measurementId: "G-XZP44Y7WC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// Reference to the folder where images are stored
const storageRef = ref(storage, 'images/projects');


const useFirebaseImageUrls = (folderPath) => {
  const [imageUrls, setImageUrls] = useState  ([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storage = getStorage();
        const storageRef = ref(storage, folderPath);
        const result = await listAll(storageRef);

        const urls = await Promise.all(
          result.items.map((imageRef) => getDownloadURL(imageRef))
        );

        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImages();
  }, [folderPath]);

  return imageUrls;
};

export default useFirebaseImageUrls;
