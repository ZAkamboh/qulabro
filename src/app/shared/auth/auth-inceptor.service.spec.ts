import { TestBed, inject } from '@angular/core/testing';

import { AuthInceptorService } from './auth-inceptor.service';

describe('InceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInceptorService]
    });
  });

  it('should be created', inject(
    [AuthInceptorService],
    (service: AuthInceptorService) => {
      expect(service).toBeTruthy();
    }
  ));
});
