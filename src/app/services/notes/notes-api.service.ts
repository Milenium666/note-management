import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../../shared/interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesApiService {
  private readonly apiUrl = 'http://localhost:3000/notes';

  constructor(private readonly http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  addNote(note: Omit<Note, 'id'>): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }
}
