import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CommonService} from '../common.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
	templateUrl: './user-add.component.html',
	styleUrls: ['./users.component.css']
})

export class UserAddComponent implements OnInit{
	usersFormGroup: FormGroup;
	submitted: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	constructor(
		private formBuilder: FormBuilder, 
		private commonService: CommonService,
		private spinnerService: Ng4LoadingSpinnerService){
		
	}
	ngOnInit(){
		this.usersFormGroup = this.formBuilder.group({
			email: [''],
			password: [''],
		});
	}

	// convenience getter for easy access to form fields
    get f() { return this.usersFormGroup.controls; }

    onSubmit(){
    	this.submitted = true;
    	this.spinnerService.show();
    	this.commonService.submitUser(this.usersFormGroup.getRawValue()).subscribe(
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