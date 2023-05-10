import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-category',
  templateUrl: './badge-category.component.html',
  styleUrls: ['./badge-category.component.css'],
})
export class BadgeCategoryComponent {
  @Input() category: string = '';
}
