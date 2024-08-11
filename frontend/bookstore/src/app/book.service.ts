import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://freetestapi.com/api/v1/books';

  constructor(private _http: HttpClient) {}

  getBooks(): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}`);
  }

  getBookById(id: string): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/${id}`);
  }

  addBook(book: any): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}`, book);
  }

  updateBook(book: any): Observable<any> {
    return this._http.put<any>(`${this.apiUrl}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this._http.delete<any>(`${this.apiUrl}?id=${id}`);
  }
}
