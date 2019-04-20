import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAppComponent } from './survey-app.component';

describe('SurveyAppComponent', () => {
  let component: SurveyAppComponent;
  let fixture: ComponentFixture<SurveyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
