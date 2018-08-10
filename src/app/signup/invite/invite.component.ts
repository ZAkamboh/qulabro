import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    allow: new FormControl(''),
    emails: new FormArray([new FormControl('a@a.com')])
  });
  constructor() {}

  ngOnInit() {
    console.log(this.form);
  }

  get emailsList(): Array<AbstractControl> {
    return (this.form.get('emails') as FormArray).controls;
  }

  createEmailFromControl(email): FormControl {
    return new FormControl(email);
  }

  addEmail() {
    const email = this.form.get('email').value;
    const emails = this.form.get('emails') as FormArray;
    console.log(email, emails, this.createEmailFromControl(email));

    emails.push(this.createEmailFromControl(email));
  }

  onSubmit(f) {
    console.log(f);
  }
}
