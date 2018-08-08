import { TestBed, inject } from '@angular/core/testing';

import { ErrorInceptorService } from './error-inceptor.service';

describe('ErrorInceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorInceptorService]
    });
  });

  it('should be created', inject([ErrorInceptorService], (service: ErrorInceptorService) => {
    expect(service).toBeTruthy();
  }));
});
