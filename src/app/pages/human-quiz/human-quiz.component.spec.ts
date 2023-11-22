import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanQuizComponent } from './human-quiz.component';

describe('HumanQuizComponent', () => {
  let component: HumanQuizComponent;
  let fixture: ComponentFixture<HumanQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanQuizComponent]
    });
    fixture = TestBed.createComponent(HumanQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
