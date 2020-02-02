import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlterRequestInterceptorService implements HttpInterceptor {     // 1. Implement this interface


  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      // 2. Override and implememnt ths method

     console.log('Below is the old request: ');
     console.log(req);                                                // 3. This logs the old request

     // Alter the request
     const newReq = req.clone(
      {
        setHeaders: { 'header2': 'xxxxxx1111xxx',
                      'header1' : 'I am a token here',
                      'header123' : 'Xoxo' }
     }
     );

     console.log('Below is the new request: ');
     console.log(newReq);                                     // 4. This logs the new editted request

     return next.handle(newReq);

}

}
