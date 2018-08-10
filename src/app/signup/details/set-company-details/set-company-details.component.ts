import { Component, OnInit } from '@angular/core';

import { SignupService } from '../../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-company-details',
  templateUrl: './set-company-details.component.html',
  styleUrls: ['./set-company-details.component.scss']
})
export class SetCompanyDetailsComponent implements OnInit {
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {}

  onSubmit({ value: { company_name, company_phone } }) {
    console.log(company_name, company_phone);
    this.signupService
      .setCompnayDetails({ company_name, company_phone })
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/sigup/workspace');
      });
  }
}
