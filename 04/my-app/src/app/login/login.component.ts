import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit() {
  	console.log("test");

	if (typeof (Storage) !== "undefined") {
		console.log('storage ready');

		localStorage.setItem("lastname", "Doe");

		console.log(localStorage.getItem("lastname"));
	}
	else {
		console.log("No web storage supported");
	}
	
		
  }
  	user = 'asdf';
	pass = '123';
	loginUser = "";
	loginPass = "";

	login() {
	if ( this.loginUser == this.user && this.loginPass == this.pass ) {
		this.router.navigate(['/account']);
	}
	else{
		alert("Error");
	}
	}
}
