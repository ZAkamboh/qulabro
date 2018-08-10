import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit({ value: { terms } }) {
    this.router.navigateByUrl('/signup/invite');
  }
}
