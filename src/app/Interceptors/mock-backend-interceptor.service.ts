import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const urls = [                                                // define responses
    {
        url: 'http://udith.just.demo/get',
        json: [
          {
            'name': 'Udith',
            'id': 1213
          },
          {
            'name': 'Gayan',
            'id': 155
          },
          {
            'name': 'Dani',
            'id': 457
          },
          {
            'name': 'Won',
            'id': 66
          }
         ]
    }
];

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const element of urls) {
            if (request.url === element.url) {
              return of(new HttpResponse({ status: 200, body: element.json }));
            }
        }


        return next.handle(request);
    }
}
