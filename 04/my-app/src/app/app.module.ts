import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
//import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
	declarations: [
	  AppComponent,
	  LoginComponent,
	  AccountComponent,
	  SecondPageComponent
	],
	imports: [
	FormsModule,
	BrowserModule, 
	AppRoutingModule,
	HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
