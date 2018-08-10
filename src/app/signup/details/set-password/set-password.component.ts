import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../../signup.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {}

  onSubmit({ value: { password } }) {
    console.log(password);
    this.signupService.setPassword(password).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/signup/company');
    }, console.error);
  }
}
