import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}
	password = new FormControl('', [Validators.required]);
	newpassword = new FormControl('', [Validators.required]);

	//Errors
	errorpassword =this.password.hasError('required') ? 'You must enter a value': '';
	errornewpassword = this.newpassword.hasError('required') ? 'You must enter a value for new password': '';

}
