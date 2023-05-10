import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from '../environments/environment'
import { books } from '../config/book.mock'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks() : any {
    
    //return this.httpClient.get(environment.apiUrl + '/books')
    return books
  }
}
