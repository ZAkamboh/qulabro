import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { OnboardingHeaderModule } from '../onboarding-header/onboarding-header.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, OnboardingHeaderModule],
  declarations: [SignupComponent],
  exports: [SignupComponent]
})
export class SignupModule {}
