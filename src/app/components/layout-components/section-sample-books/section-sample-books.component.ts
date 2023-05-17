import { Component, OnInit } from '@angular/core';
//import { Book } from '../../layout-components/section-sample-books/book.interface';
//import { BOOKS } from './book-list';
import { BookService } from '../../../services/book.service'
import { Book } from '../../../models/book.model'

@Component({
  selector: 'app-section-sample-books',
  templateUrl: './section-sample-books.component.html',
  styleUrls: ['./section-sample-books.component.css'],
})
export class SectionSampleBooksComponent implements OnInit {
  constructor(private bookService: BookService) {}
  items: Book[];

  titleSection: string = 'Livres qui pourraient plaire ?';
  ngOnInit() {
    this.bookService.getBooks().subscribe( (data) => {
      this.items = data
    })
  }
}
