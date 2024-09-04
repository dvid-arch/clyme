import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import ImageUpload from '../../components/ImageUpload';
import { createBlog, updateBlog } from '../../services/blogServices';


function Paragraph({ value, onChange, onEdit, isEditing, onSaveLink, onLinkChange, isAddingLink }) {
    const textareaRef = useRef(null);
    const [url, setUrl] = useState('');


    const handleSelection = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            const selectionStart = textarea.selectionStart;
            const selectionEnd = textarea.selectionEnd;
            const selectedText = textarea.value.substring(selectionStart, selectionEnd);

            if (selectedText) {
                onEdit(selectedText, selectionStart, selectionEnd);
            }
        }
    };

    const handleLinkSave = () => {
        if (url) {
            onSaveLink(url);
            setUrl(''); // Clear the URL input after saving
        }
    };

    const deletPar = () => {
        handleDeleteParagraph(index)
    }

    return (
        <div className="">
            <textarea
                ref={textareaRef}
                onMouseUp={handleSelection}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows="10"
                className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Enter your message..."
            />

            {isEditing && (
                <div className="mt-2">
                    <div className='mb-1'>
                        <div className='p-2 mb-1 w-fit bg-gray-100 flex gap-2'>
                            <button onClick={() => onSaveLink('underline')} className='text-sm border px-2 py-[2px] rounded-md bg-white underline'>underline</button>
                            <button onClick={() => onSaveLink('italicise')} className='text-sm border px-2 py-[2px] rounded-md bg-white italic'>italicise</button>
                            <button onClick={() => onLinkChange()} className='text-sm border px-2 py-[2px] rounded-md bg-white text-blue-700 underline'>add link</button>
                        </div>
                        {isAddingLink && (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="Enter URL"
                                    className="border p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                                <button
                                    onClick={handleLinkSave}
                                    className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save Link
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {/* <div>
                {image ? (
                    <ImageUpload setImgUrl={setImgUrl} />
                ) : (
                    <button onClick={() => onImageChange('newImageURL')} className='border px-4 bg-cyan-50 py-1 border-cyan-200 rounded-md mr-4 text-sm'>add img below</button>
                )}
            </div> */}
        </div>
    );
}

function Tcms() {
    const [date, setDate] = useState('')
    const [editingBlog, setEditingBlog] = useState(false)
    const [author, setAuthor] = useState('John Doe')
    const [header, setHeader] = useState('Sample Header on Climate Change')
    const [paragraphs, setParagraphs] = useState([{ text: "", image: null }]);
    const [editingState, setEditingState] = useState({ isEditing: false, highlightedText: '', startIndex: null, endIndex: null });
    const [currentlyEditing, setCurrentlyEditing] = useState(null);
    const [isAddingLink, setIsAddingLink] = useState(false); 
    const [imageUrl, setImgUrl] = useState('')

    const { logout } = useAuth();

    const handleParagraphChange = (index, value) => {
        const updatedParagraphs = paragraphs.map((p, i) => i === index ? { ...p, text: value } : p);
        setParagraphs(updatedParagraphs);
    };

    const handleAddParagraph = () => {
        setParagraphs([...paragraphs, { text: "", image: null }]);
    };

    const handleEdit = (selectedText, startIndex, endIndex, index) => {
        setEditingState({ isEditing: true, highlightedText: selectedText, startIndex, endIndex });
        setCurrentlyEditing(index); // Set the paragraph currently being edited
    };

    const handleSaveLink = (index, url) => {
        const { highlightedText, startIndex, endIndex } = editingState;
        const beforeHighlight = paragraphs[index].text.substring(0, startIndex);
        const afterHighlight = paragraphs[index].text.substring(endIndex);

        const newContent = `${beforeHighlight}\<a href={'${url}'}>${highlightedText}</a>\ ${afterHighlight}`;
        handleParagraphChange(index, newContent);
        setEditingState({ isEditing: false, highlightedText: '', startIndex: null, endIndex: null });
        setCurrentlyEditing(null); // Reset the editing state
        setIsAddingLink(false); // Reset link addition state
    };

    const handleLinkChange = () => {
        console.log(imageUrl)
        setIsAddingLink(true); // Start adding a link
    };

    useEffect(() => {

        console.log(imageUrl)

    }, [imageUrl])

    useEffect(()=>{
        setDate(todaysDate())
    }, [])




    const handleImageChange = (index, imageURL) => {
        const updatedParagraphs = paragraphs.map((p, i) => i === index ? { ...p, image: imageURL } : p);
        setParagraphs(updatedParagraphs);
    };

    const handleDeleteParagraph = (index) => {
        const updatedParagraphs = paragraphs.filter((p, i) => i !== index);
        setParagraphs(updatedParagraphs);
    }

    function todaysDate(){
        const today = new Date();

        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(today);

        return formattedDate
    }

    const handlePublish = async () => {
        const blog = { header, paragraphs, imageUrl, author, date};

        if (editingBlog) {
            await updateBlog(editingBlog.id, blog);
            alert('successfully updated')
        } else {
            await createBlog(blog);
            alert('successfully updated')
        }

    }

    return (
        <div className="px-8 mx-auto py-10 bg-gray-100">
            <div className='flex justify-between items-center'>
                <div className="flex gap-6 mb-8">
                    <button className="border rounded-md bg-cyan-100 px-4 inline-block py-1 border-cyan-400">BlogPost</button>
                    <button>ProjectPost</button>
                </div>
            </div>
            <div className=' lg:flex gap-12'>

                <div className=" lg:min-w-[500px] max-w-[75ch] mx-auto mb-20">
                    <div>
                        <h2 className='text-teal-950 font-semibold capitalize'>Upload main image for this post</h2>
                        <p className='text-red-700 text-sm'>image must be less than 5mb</p>
                    </div>
                    <ImageUpload setImgUrl={setImgUrl} />
                    <div className="mx-auto mt-10 mb-6">

                        <label htmlFor="cool-input" className="block text-sm font-medium text-gray-700">
                            Header/Title of Post
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm mb-4">
                            <input
                                onChange={(e) => setHeader(e.target.value)}
                                value={header}
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
                        <label htmlFor="author-input" className="block text-sm font-medium text-gray-700">
                            Author's Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                onChange={(e) => setAuthor(e.target.value)}
                                value={author}
                                type="text"
                                name="cool-input"
                                id="cool-input"
                                className="border p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Enter Author's name..."
                            />
                            
                        </div>
                    </div>
                    <div >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Paragraphs
                        </label>
                        {paragraphs.map((p, i) => (
                            <div key={i} className='mb-6'>

                                <Paragraph
                                    key={i}
                                    value={p.text}
                                    onChange={(value) => handleParagraphChange(i, value)}
                                    onEdit={(selectedText, startIndex, endIndex) => handleEdit(selectedText, startIndex, endIndex, i)}
                                    isEditing={currentlyEditing === i} // Only show editing options for the current paragraph
                                    onSaveLink={(url) => handleSaveLink(i, url)}
                                    onLinkChange={handleLinkChange}
                                    isAddingLink={isAddingLink && currentlyEditing === i} // Show URL input only for the current paragraph being edited
                                    // index={i}
                                    // handleDeleteParagraph={handleAddParagraph}
                                    image={p.image}
                                    onImageChange={(imageURL) => handleImageChange(i, imageURL)}
                                />
                                {
                                    i > 0 &&

                                    <button onClick={() => handleDeleteParagraph(i)} className='border px-4 bg-cyan-50  border-cyan-200 rounded-md text-sm'>delete this paragraph</button>
                                }
                            </div>
                        ))}
                        <div>
                            <button onClick={handleAddParagraph} className='border px-4 bg-cyan-50 py-1 border-cyan-200 rounded-md text-sm'>add new paragraph</button>
                        </div>
                        <div className='mt-8'>
                            <button onClick={handlePublish} className='border px-4 bg-green-500 text-white py-1 border-cyan-200 rounded-md  font-bold text-xl'>Publish</button>
                        </div>
                    </div>
                </div>
                <div className='bg-brwhite px-8 rounded-md'>
                    <h2 className='font-bold mb-6 text-orange-600'>Preview</h2>
                    <div className=' p-4 rounded-lg bg-orange-400 mb-6'>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <div className="min-w-[300px] min-h-[150px] bg-slate-500 rounded-md">
                                <img src={imageUrl} alt="" className='w-full max-w-[400px] rounded-lg block' />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-4xl font-bold mb-4">
                                    {header}
                                </h3>
                                <h4 className='font-semibold text-xl'>{author}</h4>
                                <h5 className='text-sm'>{date}</h5>
                            </div>

                        </div>
                    </div>
                    <div className='text-teal-950 tracking-wide text-[17px]'>
                        {<h3 className="text-4xl font-bold mb-2 capitalize">
                            {header}
                        </h3>}
                        <h4 className='font-semibold text-slate-600'> {author}</h4>
                        <h5 className='text-sm text-slate-600'>{date}</h5>
                        {paragraphs.map((n, i) => (
                            <p className='leading-loose my-4 max-w-[80ch]'>{n.text}</p>
                        ))

                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tcms;
