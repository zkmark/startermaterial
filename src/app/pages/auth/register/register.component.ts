import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}
	
	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', [Validators.required]);

	errorEmail = this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
	
	errorPassword = this.password.hasError('required') ? 'You must enter a value' : '';
	
	

}
