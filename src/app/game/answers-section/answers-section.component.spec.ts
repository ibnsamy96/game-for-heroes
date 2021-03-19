import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersSectionComponent } from './answers-section.component';

describe('AnswersSectionComponent', () => {
  let component: AnswersSectionComponent;
  let fixture: ComponentFixture<AnswersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
