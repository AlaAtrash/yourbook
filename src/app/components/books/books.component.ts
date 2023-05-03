import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = []
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks()
  }

}
