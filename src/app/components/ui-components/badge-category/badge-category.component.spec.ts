import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCategoryComponent } from './badge-category.component';

describe('BadgeCategoryComponent', () => {
  let component: BadgeCategoryComponent;
  let fixture: ComponentFixture<BadgeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
