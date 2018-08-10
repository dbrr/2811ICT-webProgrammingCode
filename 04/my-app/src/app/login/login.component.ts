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

	//	sessionStorage.setItem("id", "1");
	//	sessionStorage.setItem("user", this.loginUser );
	//	sessionStorage.setItem("birthDate", "20/4/2000");
	//	sessionStorage.setItem("age", "18");

		// if not needed for wk 5
		this.router.navigate(['/account']);
	}
}
