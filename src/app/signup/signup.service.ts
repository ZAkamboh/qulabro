import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from '../common/error-handler.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private readonly baseURL: string = environment.baseURL;
  constructor(private http: Http, private errorHandler: ErrorHandlerService) {}

  getVerificationCode(email: string): Observable<Response> {
    return this.http.post(`${this.baseURL}/v1/signup/step1`, { email }).pipe(
      map(res => JSON.parse(res['_body'])),
      catchError(this.errorHandler.handleError)
    );
  }

  verifyEmail({ user_id, verification_code }): Observable<Response> {
    return this.http
      .post(`${this.baseURL}/v1/signup/verify`, { user_id, verification_code })
      .pipe(catchError(this.errorHandler.handleError));
  }
}
