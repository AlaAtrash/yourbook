import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book.model'
@Component({
  selector: 'app-card-book-lg',
  templateUrl: './card-book-lg.component.html',
  styleUrls: ['./card-book-lg.component.css'],
})
export class CardBookLgComponent {
  @Input() book: Book | undefined = undefined;
}
