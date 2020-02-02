import { TestBed } from '@angular/core/testing';

import { AlterRequestInterceptorService } from './alter-request-interceptor.service';

describe('AlterRequestInterceptorService', () => {
  let service: AlterRequestInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlterRequestInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
