import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../signup.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  constructor(private signupService: SignupService) {}

  ngOnInit() {}

  onSubmit({ value: { password } }) {
    console.log(password);
    this.signupService.setPassword(password).subscribe(res => {
      console.log(res);
    }, console.error);
  }
}
