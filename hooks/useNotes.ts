import { useState, useEffect } from 'react';
import { Note } from '../types.ts';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: `note-${Date.now()}`,
      text,
      timestamp: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};
