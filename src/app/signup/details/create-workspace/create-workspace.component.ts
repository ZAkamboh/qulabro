import { Component, OnInit } from '@angular/core';

import { SignupService } from '../../signup.service';
import { DataService } from '../../../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrls: ['./create-workspace.component.scss']
})
export class CreateWorkspaceComponent implements OnInit {
  constructor(
    private signupService: SignupService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  onSubmit({ value: { workspace } }) {
    let company_id: number;
    this.dataService.currentData.subscribe(data => (company_id = data['id']));
    this.signupService
      .createWorkSpace({ company_id, workspace })
      .subscribe(res => {
        this.router.navigateByUrl('signup/invite');
      });
  }
}
