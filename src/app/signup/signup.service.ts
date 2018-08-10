import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { ErrorHandlerService } from '../common/error-handler.service';
import { AuthService } from '../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private readonly baseURL: string = environment.baseURL;

  constructor(
    private http: Http,
    private httpClient: HttpClient,
    private authService: AuthService,
    private errorHandler: ErrorHandlerService
  ) {}

  getVerificationCode(email: string): Observable<Response> {
    return this.http.post(`${this.baseURL}/v1/signup/step1`, { email }).pipe(
      map(this.parseBody),
      catchError(this.errorHandler.handleError)
    );
  }

  verifyEmail({
    user_id,
    verification_code
  }: {
    user_id: number;
    verification_code: string;
  }): Observable<Response> {
    return this.http
      .post(`${this.baseURL}/v1/signup/verify`, { user_id, verification_code })
      .pipe(
        map(res => {
          const body = this.parseBody(res);
          this.authService.token = body.data.token;
          return body;
        }),
        catchError(this.errorHandler.handleError)
      );
  }

  setName({
    first_name,
    last_name
  }: {
    first_name: string;
    last_name: string;
  }) {
    return this.httpClient.post(`${this.baseURL}/v1/signup/name`, {
      first_name,
      last_name
    });
  }

  setPassword(password: string) {
    return this.httpClient.post(`${this.baseURL}/v1/signup/password`, {
      password
    });
  }

  setCompnayDetails({
    company_name,
    company_phone
  }: {
    company_name: string;
    company_phone: string;
  }) {
    return this.httpClient.post(`${this.baseURL}/v1/company/create`, {
      name: company_name,
      contactNumber: company_phone
    });
  }

  createWorkSpace({
    company_id,
    workspace
  }: {
    company_id: number;
    workspace: string;
  }) {
    return this.httpClient.post(`${this.baseURL}/v1/company/workspace`, {
      company_id,
      workspace
    });
  }

  private parseBody(res) {
    console.log(res);

    return JSON.parse(res['_body']);
  }
}
