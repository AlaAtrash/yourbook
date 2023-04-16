import { Component, Input } from '@angular/core';
import { testimonial } from '../../layout-components/section-testimonial/testimonial.interface';

@Component({
  selector: 'app-card-testimonial',
  templateUrl: './card-testimonial.component.html',
  styleUrls: ['./card-testimonial.component.css'],
})
export class CardTestimonialComponent {
  @Input() testimonial: testimonial | undefined = undefined;
}
