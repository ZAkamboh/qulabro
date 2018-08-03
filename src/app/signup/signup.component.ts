import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: string; valid; Boolean }) {
    console.log(value, valid, environment.baseURL);
  }
}
