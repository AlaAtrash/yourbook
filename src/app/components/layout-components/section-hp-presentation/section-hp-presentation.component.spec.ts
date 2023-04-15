import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHpPresentationComponent } from './section-hp-presentation.component';

describe('SectionHpPresentationComponent', () => {
  let component: SectionHpPresentationComponent;
  let fixture: ComponentFixture<SectionHpPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHpPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHpPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
