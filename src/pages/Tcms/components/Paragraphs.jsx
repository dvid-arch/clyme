import React, { useRef, useState } from 'react';

function Paragraph({ index, paragraph, handleSelection, handleTextChange, handleItalicise, handleLink, handleUnderLine, handleSave, isEditing, highlightedText, startIndex, endIndex, currentEditingIndex }) {
  const textareaRef = useRef(null);

  return (
    <div key={index} className='mb-8' index={`${index}`}>
      <div className="mt-1 mb-6">
        {index === currentEditingIndex ? (
          <textarea
            ref={textareaRef}
            onMouseUp={(e) => handleSelection(e, index)}
            id="editableTextarea"
            value={paragraph}
            onChange={(e) => handleTextChange(e, index)}
            name="message"
            rows="10"
            className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Enter your message..."
          />
        ) : (
          <textarea
            readOnly
            onMouseUp={(e) => handleSelection(e, index)}
            id="editableTextarea"
            value={paragraph}
            name="message"
            rows="10"
            className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Enter your message..."
          />
        )}
        {isEditing && index === currentEditingIndex && (
          <div className="mt-2">
            <div className='mb-1'>
              <label htmlFor="highlightedText" className="block text-sm font-medium text-gray-700">
                Edit Highlighted Text
              </label>
              <div className='p-2 mb-1 w-fit bg-gray-100 flex gap-2 '>
                <button onClick={() => handleUnderLine(index)} className='text-sm border px-2 py-[2px] rounded-md bg-white underline'>underline</button>
                <button onClick={() => handleItalicise(index)} className='text-sm border px-2 py-[2px] rounded-md bg-white italic'>italicise</button>
                <button onClick={() => handleLink(index)} className='text-sm border px-2 py-[2px] rounded-md bg-white text-blue-700 underline'>add link</button>
              </div>

              <button
                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleSave(index)}
              >
                Save changes
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <button className='border px-4 bg-cyan-50 py-1 border-cyan-200 rounded-md mr-4 text-sm'>add img below</button>
      </div>
    </div>
  );
}

export default Paragraph;
