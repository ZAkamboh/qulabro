import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { SignupService } from '../signup.service';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  providers: [SignupService]
})
export class VerifyComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private signupService: SignupService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  focusNext(key, elem) {
    if (key && this.isAlphaNumeric(key)) {
      this.renderer
        .nextSibling(this.renderer.parentNode(elem))
        .childNodes[0].focus();
    } else {
      return;
    }
  }

  isAlphaNumeric(key: number) {
    return (key >= 48 && key <= 57) || (key >= 65 && key <= 90);
  }

  onSubmit({ value, valid }: { value: Object; valid; Boolean }) {
    // this.signupService.verifyEmail()
    // this.router.navigate(['/signup/details']);
    const verification_code = Object.values(value).join('');
    let data = {};
    this.dataService.currentData.subscribe(res => {
      console.log(res);

      data = res;
    });
    this.signupService
      .verifyEmail({ user_id: data['data'].user_id, verification_code })
      .subscribe(
        (res: Response) => {
          console.log(res);
        },
        err => console.error(err)
      );
  }
}
