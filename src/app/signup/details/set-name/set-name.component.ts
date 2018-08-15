import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl
} from '@angular/forms';

import { SignupService } from '../../signup.service';

@Component({
  selector: 'app-details',
  templateUrl: './set-name.component.html',
  styleUrls: ['./set-name.component.scss']
})
export class SetNameComponent implements OnInit {

  form  = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),

  });

  constructor(private router: Router, private signupService: SignupService) {}

  ngOnInit() {}

  onSubmit({ value: { first_name, last_name } }) {
    console.log(first_name, last_name);
    this.signupService.setName({ first_name, last_name }).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/signup/password');
      },
      err => console.error(err)
    );
  }
}
