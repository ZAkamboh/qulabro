import { Component, OnInit } from '@angular/core';

import { SignupService } from '../../signup.service';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-set-company-details',
  templateUrl: './set-company-details.component.html',
  styleUrls: ['./set-company-details.component.scss']
})
export class SetCompanyDetailsComponent implements OnInit {
  constructor(
    private signupService: SignupService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  onSubmit({ value: { company_name, company_phone } }) {
    console.log(company_name, company_phone);
    this.signupService
      .setCompnayDetails({ company_name, company_phone })
      .subscribe(res => {
        console.log(res);
        this.dataService.nextData = res['data'];
        this.router.navigateByUrl('/signup/workspace');
      });
  }
}
