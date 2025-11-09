import React from 'react';
import NoteCard from './NoteCard.tsx';
import { Note } from '../types.ts';

interface NoteListProps {
  notes: Note[];
  deleteNote: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
  return (
    <div className="space-y-4">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
