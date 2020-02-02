  import {HTTP_INTERCEPTORS} from '@angular/common/http';

  import { AlterRequestInterceptorService } from './alter-request-interceptor.service';     // 1. import
  import { MockBackendInterceptor } from './mock-backend-interceptor.service';             // 2. Import


  export const interceptorProviders =
    [
        // Enter list of interceptor classes here

        { provide: HTTP_INTERCEPTORS, useClass: AlterRequestInterceptorService, multi: true },    // 3. add in the array

        { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true }          // 3. add in the array



  ];
