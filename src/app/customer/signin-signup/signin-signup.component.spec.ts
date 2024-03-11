import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignupComponent } from './signin-signup.component';

describe('SigninSignupComponent', () => {
  let component: SigninSignupComponent;
  let fixture: ComponentFixture<SigninSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigninSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
