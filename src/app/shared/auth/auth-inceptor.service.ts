import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { environment } from '../../../environments/environment';
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInceptorService implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private http: Http,
    private httpClient: HttpClient
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!!this.auth.token && !this.auth.isAuthenticated) {
      return this.refreshToken().pipe(
        switchMap(() => {
          const authorizedRequest = this.setHeader(req);
          return next.handle(authorizedRequest);
        })
      );
    }
    return next.handle(this.setHeader(req));
  }

  setHeader(req: HttpRequest<any>) {
    const TOKEN = this.auth.token;
    const authorizedRequest = req.clone({
      setHeaders: { Authorization: `Bearer ${TOKEN}` }
    });
    return authorizedRequest;
  }

  refreshToken() {
    const TOKEN = this.auth.token;

    const headers = new Headers({ Authorization: `Bearer ${TOKEN}` });
    return this.http
      .patch(`${environment.baseURL}/v1/auth/refresh`, {}, { headers })
      .pipe(
        map((res: any) => {
          this.auth.token = res.data.token;
          return res;
        })
      );
  }
}
