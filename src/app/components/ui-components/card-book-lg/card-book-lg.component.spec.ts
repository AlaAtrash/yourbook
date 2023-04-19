import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBookLgComponent } from './card-book-lg.component';

describe('CardBookLgComponent', () => {
  let component: CardBookLgComponent;
  let fixture: ComponentFixture<CardBookLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBookLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBookLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
