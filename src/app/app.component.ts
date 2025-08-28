import { Component, Injector, OnInit } from '@angular/core';
import { Note } from './shared/interfaces/note.interface';
import { NotesApiService } from './services/notes/notes-api.service';
import { LocalStorageNotesService } from './services/notes/local-storage-notes.service';
import { StorageTypeService } from './services/storage-type.service';

export abstract class NotesService {
  abstract getNotes(): any;
  abstract addNote(note: Omit<Note, 'id'>): any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [
    {
      provide: NotesService,
      useFactory: (injector: Injector) => {
        const storageTypeService = injector.get(StorageTypeService);
        const type = storageTypeService.getStorageType();
        return type === 'api'
          ? injector.get(NotesApiService)
          : injector.get(LocalStorageNotesService);
      },
      deps: [Injector],
    },
  ],
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  newNoteTitle = '';
  newNoteContent = '';

  storageType: 'api' | 'localstorage' = 'api';

  constructor(
    private readonly notesService: NotesService,
    private readonly storageTypeService: StorageTypeService
  ) {}

  ngOnInit(): void {
    this.storageType = this.storageTypeService.getStorageType();
    this.loadNotes();
  }

  private loadNotes(): void {
    const result = this.notesService.getNotes();
    if (this.storageType === 'localstorage') {
      this.notes = result;
    } else {
      result.subscribe((notes: Note[]) => (this.notes = notes));
    }
  }

  addNote(): void {
    if (!this.newNoteTitle || !this.newNoteContent) return;

    const noteData = {
      title: this.newNoteTitle,
      content: this.newNoteContent,
    };

    const result = this.notesService.addNote(noteData);
    if (this.storageType === 'localstorage') {
      this.notes = [...this.notes, result];
    } else {
      result.subscribe((savedNote: Note) => {
        this.notes = [...this.notes, savedNote];
      });
    }

    this.newNoteTitle = '';
    this.newNoteContent = '';
  }

  switchToApi(): void {
    this.storageTypeService.setStorageType('api');
  }

  switchToLocalStorage(): void {
    this.storageTypeService.setStorageType('localstorage');
  }
}
