// src/components/ImageUpload.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/firebase-config';

const ImageUpload = ({setImgUrl}) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('')
  const [url, setUrl] = useState('');

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setImgUrl('hey image has been dropped')
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false
  });

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const handleDelete = () => {
    if (!url) {
      setError('No image to delete');
      return;
    }

    const storageRef = ref(storage, url);

    deleteObject(storageRef)
      .then(() => {
        setUrl('');
        setImgUrl('')
        setPreview('')
        setFile(null);
        setProgress(0);
        setError('');
      })
      .catch((error) => {
        console.error(error);
        setError('Delete failed');
      });
  };

  return (
    <div className="container mx-auto p-4">
      {(!preview) && <div {...getRootProps()} className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 min-h-40 rounded-lg cursor-pointer hover:border-solid hover:border-blue-600 transition duration-300">
        <input {...getInputProps()} />
        <p className="text-gray-600">Drag & drop an image here, or click to select a file</p>
      </div>}
      {(preview && !url) && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className='w-full max-w-[400px] rounded-lg block' />
        </div>
      )}
      {(url) && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className='w-full max-w-[400px] rounded-lg block' />
        </div>
      )}


      {(file && !url) && <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Upload
      </button>}
      {progress > 0 && (
        <div className="mt-4 w-full">
          <progress className="w-full" value={progress} max="100" />
        </div>
      )}
      {url && (
        <div className="mt-4">
          <p className="text-green-500">Upload successful! <a href={url} target="_blank" rel="noopener noreferrer" className="underline">View image</a></p>
        </div>
      )}
      {
        url && (
          <button
            onClick={handleDelete}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            delete
          </button>
        )
      }
    </div>
  );
};


export default ImageUpload;
