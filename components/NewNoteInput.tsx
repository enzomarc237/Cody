import React, { useState } from 'react';

interface NewNoteInputProps {
  onAddNote: (text: string) => void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ onAddNote }) => {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    if (text.trim()) {
      onAddNote(text);
      setText('');
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Jot down a quick note..."
        className="flex-grow p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleAddClick}
        className="bg-blue-500 text-white font-bold p-3 rounded-lg ml-2 hover:bg-blue-600 transition-colors"
      >
        <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

export default NewNoteInput;
