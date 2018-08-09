import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
  BrowserModule, 
  RouterModule.forRoot([
  	{"path":"login","component":LoginComponent},
	{"path":"account","component":AccountComponent},
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
