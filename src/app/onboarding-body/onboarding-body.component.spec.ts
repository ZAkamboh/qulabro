import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingBodyComponent } from './onboarding-body.component';

describe('OnboardingBodyComponent', () => {
  let component: OnboardingBodyComponent;
  let fixture: ComponentFixture<OnboardingBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
