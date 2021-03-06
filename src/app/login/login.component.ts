import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CommonService} from '../common.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
	loginFormGroup: FormGroup;
	submitted: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	constructor(
		private formBuilder: FormBuilder, 
		private commonService: CommonService,
		private spinnerService: Ng4LoadingSpinnerService){
		
	}
	ngOnInit(){
		this.loginFormGroup = this.formBuilder.group({
			email: [''],
			password: [''],
		});
	}

	// convenience getter for easy access to form fields
    get f() { return this.loginFormGroup.controls; }

    onSubmit(){
    	this.submitted = true;
    	this.spinnerService.show();
    	this.commonService.submitLogin(this.loginFormGroup.getRawValue()).subscribe(
			data => {
				this.errMsg = '';
				this.successMsg = data.message;
			},
			error => {debugger
				this.successMsg = '';
				this.errMsg = error.error.message;
				this.spinnerService.hide();
			}
		)
    }
}