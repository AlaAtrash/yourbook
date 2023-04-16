import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBorrowComponent } from './btn-borrow.component';

describe('BtnBorrowComponent', () => {
  let component: BtnBorrowComponent;
  let fixture: ComponentFixture<BtnBorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBorrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
