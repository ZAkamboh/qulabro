import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ErrorInceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).catch((err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error(`An error occured: ${err.error.message}`);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned ${err.status}, body was:`, err.error);
      }
      // ...optionally return a default fallback value so app can continue (pick one)
      // which could be a default value (which has to be a HttpResponse here)
      // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
      // or simply an empty observable
      return Observable.empty();
    });
  }
}
