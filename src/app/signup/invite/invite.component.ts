import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

import { InviteService } from './invite.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    allow: new FormControl(''),
    emails: new FormArray([])
  });
  constructor(private inviteService: InviteService, private router: Router) {}

  ngOnInit() {}

  private get emailsList(): Array<AbstractControl> {
    return (this.form.get('emails') as FormArray).controls;
  }

  private createEmailFromControl(email): FormControl {
    return new FormControl(email);
  }

  private addEmail() {
    const email = this.form.get('email').value;
    const emails = this.form.get('emails') as FormArray;

    emails.push(this.createEmailFromControl(email));
    this.clearEmail();
  }

  private clearEmail() {
    this.form.get('email').setValue('');
  }

  private onSubmit() {
    const emails: Array<string> = this.form.get('emails').value;
    if (emails.length) {
      this.inviteService
        .invite(emails)
        .subscribe(res => this.router.navigateByUrl('/signup'));
    }
  }
}
