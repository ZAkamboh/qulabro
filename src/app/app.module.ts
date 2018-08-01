import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule, Input } from '@ionic/angular';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './signup/verify/verify.component';
import { DetailsComponent } from './signup/details/details.component';
import { InviteComponent } from './signup/invite/invite.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    VerifyComponent,
    DetailsComponent,
    InviteComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
