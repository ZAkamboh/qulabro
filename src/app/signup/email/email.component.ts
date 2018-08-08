import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../signup.service';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  errMsg: string;

  constructor(
    private router: Router,
    private signupService: SignupService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: { email: string }; valid; Boolean }) {
    this.errMsg = '';
    this.signupService.getVerificationCode(value.email).subscribe(
      res => {
        this.dataService.nextData = res;
        this.dataService.currentData.subscribe(data => console.log(data));

        this.router.navigate(['/signup/verify']);
      },
      err => {
        if (err) {
          this.errMsg = err[0];
          console.log(this.errMsg);
        }
      }
    );
  }

  handleKeyup() {
    this.errMsg = '';
  }
}
