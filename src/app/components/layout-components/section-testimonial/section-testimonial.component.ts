import { Component } from '@angular/core';
import { TESTIMONIALS } from './testimonial-list';
import { testimonial } from './testimonial.interface';

@Component({
  selector: 'app-section-testimonial',
  templateUrl: './section-testimonial.component.html',
  styleUrls: ['./section-testimonial.component.css'],
})
export class SectionTestimonialComponent {
  titleSection: string = 'Témoignages';
  items: testimonial[] = TESTIMONIALS;
}
