import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSampleBooksComponent } from './section-sample-books.component';

describe('SectionSampleBooksComponent', () => {
  let component: SectionSampleBooksComponent;
  let fixture: ComponentFixture<SectionSampleBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSampleBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSampleBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
