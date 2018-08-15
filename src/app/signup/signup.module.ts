import { CompareValidatorDirective } from './../shared/compare';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../routes/routes';
import { OnboardingHeaderModule } from '../onboarding-header/onboarding-header.module';

import { SignupComponent } from './signup.component';
import { EmailComponent } from './email/email.component';
import { VerifyComponent } from './verify/verify.component';
import { InviteComponent } from './invite/invite.component';
import { OnboardingBodyComponent } from '../onboarding-body/onboarding-body.component';
import { SetNameComponent } from './details/set-name/set-name.component';
import { SetPasswordComponent } from './details/set-password/set-password.component';
import { SetCompanyDetailsComponent } from './details/set-company-details/set-company-details.component';

import { SignupService } from './signup.service';
import { DataService } from '../shared/data.service';
import { CreateWorkspaceComponent } from './details/create-workspace/create-workspace.component';
import { TermsComponent } from './terms/terms.component';

import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OnboardingHeaderModule,
    PerfectScrollbarModule
  ],
  declarations: [
    OnboardingBodyComponent,
    SignupComponent,
    EmailComponent,
    VerifyComponent,
    InviteComponent,
    SetNameComponent,
    SetPasswordComponent,
    SetCompanyDetailsComponent,
    CreateWorkspaceComponent,
    TermsComponent,
    CompareValidatorDirective
  ],
  exports: [SignupComponent],
  providers: [SignupService, DataService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})
export class SignupModule {}
