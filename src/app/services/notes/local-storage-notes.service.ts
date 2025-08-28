import { Injectable } from '@angular/core';
import { Note } from '../../shared/interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageNotesService {
  private readonly storageKey = 'notes';

  getNotes(): Note[] {
    const notes = localStorage.getItem(this.storageKey);
    return notes ? JSON.parse(notes) : [];
  }

  addNote(note: Omit<Note, 'id'>): Note {
    const notes = this.getNotes();
    const newNote: Note = {
      id: notes.length > 0 ? Math.max(...notes.map((n) => n.id)) + 1 : 1,
      ...note,
    };
    notes.push(newNote);
    localStorage.setItem(this.storageKey, JSON.stringify(notes));
    return newNote;
  }
}
