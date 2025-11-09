import React from 'react';
import { Note } from '../types.ts';

interface NoteCardProps {
  note: Note;
  deleteNote: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, deleteNote }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-sm text-gray-800 relative">
      <button
        onClick={() => deleteNote(note.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <p className="mr-4">{note.text}</p>
      <p className="text-xs text-gray-500 mt-2">{note.timestamp}</p>
    </div>
  );
};

export default NoteCard;
