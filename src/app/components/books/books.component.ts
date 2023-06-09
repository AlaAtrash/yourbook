import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'
import { Book } from '../../models/book.model'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe( (data) => {
      this.books = data
    })
  }

}
