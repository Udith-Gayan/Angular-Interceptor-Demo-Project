import { TestBed } from '@angular/core/testing';

import { MockBackendInterceptorService } from './mock-backend-interceptor.service';

describe('MockBackendInterceptorService', () => {
  let service: MockBackendInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBackendInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
