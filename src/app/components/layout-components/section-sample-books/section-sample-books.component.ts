import { Component } from '@angular/core';
import { Book } from '../../layout-components/section-sample-books/book.interface';
import { BOOKS } from './book-list';

@Component({
  selector: 'app-section-sample-books',
  templateUrl: './section-sample-books.component.html',
  styleUrls: ['./section-sample-books.component.css'],
})
export class SectionSampleBooksComponent {
  titleSection: string = 'Livres qui pourraient plaire ?';
  items: Book[] = BOOKS;
}
