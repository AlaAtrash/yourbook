import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Book } from '../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks() : Observable<Book[]> {
    return this.httpClient.get<Book[]>(environment.apiUrl + 'books')
  }
}
