import { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAuth } from '../../context/authContext';
import ImageUpload from '../../components/ImageUpload';

function DragAndDrop() {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="max-w-[300px] mx-auto text-center mt-10">
            <div
                {...getRootProps()}
                className={`bg-white border-2 border-dashed rounded-md flex justify-center items-center min-h-40 ${isDragActive ? 'border-indigo-600 bg-gray-100' : 'border-gray-300'}`}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="text-indigo-600">Drop the files here ...</p>
                ) : (
                    <div>
                        <p className="text-gray-600">
                            Drag & drop some files here, or click to select files
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

function Cms() {
    const [content, setContent] = useState('This is some sample text. Highlight any part of this text to edit it in place.');
    const [highlightedText, setHighlightedText] = useState('');
    const [startIndex, setStartIndex] = useState(null);
    const [endIndex, setEndIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [addLink, setAddLink] = useState(false);
    const textareaRef = useRef(null);
    const  { logout }= useAuth();

    const handleSelection = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            const selectionStart = textarea.selectionStart;
            const selectionEnd = textarea.selectionEnd;
            const selectedText = textarea.value.substring(selectionStart, selectionEnd);

            if (selectedText) {
                setHighlightedText(selectedText);
                setStartIndex(selectionStart);
                setEndIndex(selectionEnd);
                setIsEditing(true);
            }
        }
    };

    const handleTextChange = (e) => {
        setHighlightedText(e.target.value);
    };

    const handleSave = () => {
        if (startIndex !== null && endIndex !== null) {
            const beforeHighlight = content.substring(0, startIndex);
            const afterHighlight = content.substring(endIndex);
            const newContent = beforeHighlight + highlightedText + afterHighlight;
            setContent(newContent);
            setIsEditing(false);
        }
    };

    function handleLogout(){
        logout()
    }

    return (
        <div className="py-10 px-8 mx-auto max-w-[1000px]  my-8 ">
            <div>
                <div className="flex gap-6 mb-8">
                    <button className="border rounded-md bg-cyan-100 px-4 inline-block py-1 border-cyan-400">BlogPost</button>
                    <button>ProjectPost</button>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div className="max-w-[75ch] mx-auto">
                <ImageUpload />
                <DragAndDrop />
                <div className="mx-auto mt-10 mb-6">
                    <label htmlFor="cool-input" className="block text-sm font-medium text-gray-700">
                        Header/Title of Post
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            type="text"
                            name="cool-input"
                            id="cool-input"
                            className="border p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter something cool..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4h2V7zm0 6H9v2h2v-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Paragraph
                    </label>
                    <div className="mt-1 mb-6">
                        <textarea
                            ref={textareaRef}
                            onMouseUp={handleSelection}
                            id="editableTextarea"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            name="message"
                            rows="10"
                            className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Enter your message..."
                        />
                        {isEditing && (
                            <div className="mt-2">

                                <div className='mb-1'>
                                    <label htmlFor="highlightedText" className="block text-sm font-medium text-gray-700">
                                        Edit Highlighted Text
                                    </label>
                                    <div className='p-2 mb-1 w-fit bg-gray-100 flex gap-2 '>
                                        <button className='text-sm border px-2 py-[2px] rounded-md bg-white underline'>underline</button>
                                        <button className='text-sm border px-2 py-[2px] rounded-md bg-white italic'>italicise</button>
                                        <button className='text-sm border px-2 py-[2px] rounded-md bg-white text-blue-700 underline'>add link</button>
                                    </div>
                                    {addLink && <input
                                        type="text"
                                        id="highlightedText"
                                        value={highlightedText}
                                        onChange={handleTextChange}
                                        className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    />}
                                    <button
                                        onClick={handleSave}
                                        className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>

                                </div>

                            </div>
                        )}
                    </div>
                    <div>
                        <button className='border px-4 bg-cyan-50 py-1 border-cyan-200 rounded-md mr-4 text-sm'>add img</button>
                        <button className='border px-4 bg-cyan-50 py-1 border-cyan-200 rounded-md text-sm'>add new paragragh</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cms;
