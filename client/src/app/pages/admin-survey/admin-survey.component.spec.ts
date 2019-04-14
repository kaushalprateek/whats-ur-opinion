import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSurveyComponent } from './admin-survey.component';

describe('AdminSurveyComponent', () => {
  let component: AdminSurveyComponent;
  let fixture: ComponentFixture<AdminSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
