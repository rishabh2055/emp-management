import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CommonService} from '../common.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
	templateUrl: './employee-add.component.html',
	styleUrls: ['./employees.component.css']
})
export class EmployeeAddComponent implements OnInit{
	employeeFormGroup: FormGroup;
	submitted: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	activeTabs: String = 'personal';
	constructor(
		private formBuilder: FormBuilder, 
		private commonService: CommonService,
		private spinnerService: Ng4LoadingSpinnerService){
		
	}
	ngOnInit(){
		this.employeeFormGroup = this.formBuilder.group({
			empId: [{value: '', disabled: true}],
			empName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			empDesignation: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			empEmail: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]],
			empDepartment: ['', [Validators.required]],
			empGender: ['', [Validators.required]],
			empJoiningDate: ['', [Validators.required]],
			empPhoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^[0-9+ ]*$/)]],
			empSalary: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[0-9.,]*$/)]],
			empBloodGroup: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5), Validators.pattern(/^[A-Z+ ]*$/)]],
			empGrade: ['', [Validators.required]],
			empAddress: ['', [Validators.minLength(3), Validators.maxLength(500)]],

		});
	}

	changeCurrentTab(tab){
		this.activeTabs = tab;
	}
}