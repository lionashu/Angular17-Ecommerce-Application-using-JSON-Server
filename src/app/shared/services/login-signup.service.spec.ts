import { TestBed } from '@angular/core/testing';

import { LoginSignupService } from './login-signup.service';

describe('LoginSignupService', () => {
  let service: LoginSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
