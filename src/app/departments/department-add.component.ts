import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CommonService} from '../common.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
	templateUrl: './department-add.component.html',
	styleUrls: ['./departments.component.css']
})

export class DepartmentAddComponent implements OnInit{
	departmentFormGroup: FormGroup;
	submitted: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	departmentObj = {departmentID: '', departmentName: '', departmentDesc: ''};
	constructor(
		private formBuilder: FormBuilder, 
		private commonService: CommonService,
		private spinnerService: Ng4LoadingSpinnerService){
		
	}
	ngOnInit(){
		this.getDepartmentID();
		this.departmentFormGroup = this.formBuilder.group({
			departmentID: [{value: '', disabled: true}, Validators.required],
			departmentName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
			departmentDesc: ['', [Validators.minLength(4), Validators.maxLength(100)]],
		});
	}

	// convenience getter for easy access to form fields
    get f() { return this.departmentFormGroup.controls; }

    getDepartmentID(){
    	this.spinnerService.show();
    	this.commonService.getDepartmentID()
    		.subscribe(
    				data => {
    					this.errMsg = '';
    					this.departmentObj = {departmentID: data.departmentId, departmentName: '', departmentDesc: ''};
    					this.spinnerService.hide();
    				},
    				error => {
    					this.errMsg = error.error.message.message;
    					this.spinnerService.hide();
    				}
    			)
    }

    onSubmit(){
    	this.submitted = true;debugger
    	this.spinnerService.show();
    	this.commonService.addNewDepartment(this.departmentObj).subscribe(
    			data => {
    				this.errMsg = '';
    				this.successMsg = data.message;
    				this.getDepartmentID();
    			},
    			error => {
    				this.successMsg = '';
    				this.errMsg = error.error.message.message;
    				this.spinnerService.hide();
    			}
    		)
    }
}