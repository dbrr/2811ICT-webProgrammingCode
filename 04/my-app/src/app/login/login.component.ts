import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient) {  }

  ngOnInit() {
  	console.log("test");

	if (typeof (Storage) !== "undefined") {
		console.log('storage ready');

		localStorage.setItem("user", "asdf");
		localStorage.setItem("pass", "1234");

		console.log(localStorage.getItem("lastname"));
	}
	else {
		console.log("No web storage supported");
	}
	
		
  }
	loginUser = "";
	loginPass = "";

	login() {
	//	if ( this.loginUser == localStorage.getItem("user") && this.loginPass == localStorage.getItem("pass") ) {
	//		this.router.navigate(['/account']);
	//	}
	//	else{
	//		alert("Error");
	//	}

		let user = {"user": this.loginUser, "id": 1, "birthDate": "20/4/2000", "age": "18" }
		sessionStorage.setItem('user', JSON.stringify(user));


		// if not needed for wk 5
		this.http.post('login', {username:this.loginUser, password:this.loginPass}.subscribe(
		res=>{
			console.log(res);
		})

		//this.router.navigate(['/account']);
	}

	// Workshop help
	//	logging component
	//	import {HttpClient } from '@angular/common/http';
	//
	//	constructor(private router:Router, private http:HttpClient, ....)
	//
	//	// url is a variable
	//	this.http.post( url, { username:thisusername, ....}.subscribe(
	//	res=>{
	//		
	//	}
	//	})
	//
}
