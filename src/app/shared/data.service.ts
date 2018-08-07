import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject({});
  private currData = this.dataSource.asObservable();
  constructor() {}

  get currentData(): Observable<Object> {
    return this.currData;
  }

  set nextData(message: Object) {
    this.dataSource.next(message);
  }
}
