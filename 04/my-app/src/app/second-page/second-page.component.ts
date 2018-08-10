import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

	user;

  constructor(private router: Router) {  }

  ngOnInit() {
  	this.user = JSON.parse(sessionStorage.getItem('user'));
  }
	logout() {
		sessionStorage.clear();
		this.router.navigate(['/login']);
	}
}
