import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnboardingHeaderModule } from '../onboarding-header/onboarding-header.module';

import { SignupComponent } from './signup.component';
import { EmailComponent } from './email/email.component';
import { VerifyComponent } from './verify/verify.component';
import { DetailsComponent } from './details/details.component';
import { InviteComponent } from './invite/invite.component';
import { AppRoutingModule } from '../routes/routes';
import { OnboardingBodyComponent } from '../onboarding-body/onboarding-body.component';

import { SignupService } from './signup.service';
import { DataService } from '../shared/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    OnboardingHeaderModule
  ],
  declarations: [
    OnboardingBodyComponent,
    SignupComponent,
    EmailComponent,
    VerifyComponent,
    DetailsComponent,
    InviteComponent
  ],
  exports: [SignupComponent],
  providers: [SignupService, DataService]
})
export class SignupModule {}
