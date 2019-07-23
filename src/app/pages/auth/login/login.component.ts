import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}
	
	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return 	this.email.hasError('required') ? 'You must enter a value' :
						this.email.hasError('email') ? 'Not a valid email' : ''
						this.password.hasError('required') ? 'You must enter a value' : '';
  }

}
