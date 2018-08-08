import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SignupModule } from './signup/signup.module';
import { AppRoutingModule } from './routes/routes';

import { AppComponent } from './app.component';

import { AuthInceptorService } from './shared/auth/auth-inceptor.service';
import { ErrorInceptorService } from './shared/inceptors/error-inceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SignupModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
