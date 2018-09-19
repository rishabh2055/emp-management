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

	}

	changeCurrentTab(tab){
		this.activeTabs = tab;
	}
}