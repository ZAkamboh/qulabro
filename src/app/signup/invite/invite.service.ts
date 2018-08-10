import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  private readonly baseURL: string = environment.baseURL;

  constructor(private httpClient: HttpClient) {}

  invite(email: Array<string>) {
    return this.httpClient.post(`${this.baseURL}/v1/invite`, { email });
  }
}
