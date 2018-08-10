import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCompanyDetailsComponent } from './set-company-details.component';

describe('SetCompanyDetailsComponent', () => {
  let component: SetCompanyDetailsComponent;
  let fixture: ComponentFixture<SetCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
