import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor() {}
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(error: HttpErrorResponse) {
    console.log(error);

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`An error occured: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong

      console.error(
        `backend returned code ${error.status}.`,
        `Body was: ${error['_body']}`
      );
      return throwError(JSON.parse(error['_body'])
        .message as HttpErrorResponse);
    }
  }
}
