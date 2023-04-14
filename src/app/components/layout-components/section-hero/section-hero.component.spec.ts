import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeroComponent } from './section-hero.component';

describe('SectionHeroComponent', () => {
  let component: SectionHeroComponent;
  let fixture: ComponentFixture<SectionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
