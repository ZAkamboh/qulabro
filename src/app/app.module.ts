import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SignupModule } from './signup/signup.module';
import { AppRoutingModule } from './routes/routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SignupModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
