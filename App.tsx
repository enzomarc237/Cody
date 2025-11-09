import React from 'react';
import { useNotes } from './hooks/useNotes.ts';
import NoteList from './components/NoteList.tsx';
import NewNoteInput from './components/NewNoteInput.tsx';

const App: React.FC = () => {
  const { notes, addNote, deleteNote } = useNotes();

  return (
    <div className="bg-[#2d3748] min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <header className="bg-gray-100 p-3 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.414a1 1 0 00-.293-.707l-4-4A1 1 0 0011.586 3H4zm5 6a1 1 0 10-2 0v2a1 1 0 102 0V8z" clipRule="evenodd" />
              </svg>
              <h1 className="text-md font-semibold text-gray-700">Quick Notes</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </header>
          <div className="p-4">
            <NoteList notes={notes} deleteNote={deleteNote} />
          </div>
          <footer className="p-4 bg-gray-50 border-t border-gray-200">
            <NewNoteInput onAddNote={addNote} />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
