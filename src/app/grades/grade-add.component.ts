import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CommonService} from '../common.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
	templateUrl: './grade-add.component.html',
	styleUrls: ['./grades.component.css']
})

export class GradeAddComponent implements OnInit{
	gradesFormGroup: FormGroup;
	submitted: boolean = true;
	successMsg: string = '';
	errMsg: string = '';
	constructor(
		private formBuilder: FormBuilder,
		private commonService: CommonService,
		private loadingService: Ng4LoadingSpinnerService
	){
		
	}
	ngOnInit(){
		this.getGradeID()
		this.gradesFormGroup = this.formBuilder.group({
			gradeId: [{value: '', disabled: true}, Validators.required],
			gradeName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
			startSalary: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[0-9.]+$/)]],
			endSalary: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[0-9.]+$/)]],
			gradeDesc: ['', [Validators.minLength(4), Validators.maxLength(100)]]
		})
	}

	// convenience getter for easy access to form fields
    get f() { return this.gradesFormGroup.controls; }

    /** 
	 * Function used to get new grade unique id
     */
	getGradeID(): void{
		this.loadingService.show();
		this.commonService.getGradeID().subscribe(
			data => {
				this.errMsg = '';
				this.loadingService.hide();
				if(data.gradeId && data.gradeId !== ''){
					this.gradesFormGroup.get('gradeId').setValue(data.gradeId);
				}
			},
			error => {
				this.loadingService.hide();
				this.successMsg = '';
				this.errMsg = error.error.message.message;
			}
		)
	} 

	/**
	*	Function used to validate salary range
	*   start salary should be less than end salary
	*/
	 validateSalary(){
	 	let startSalary = this.gradesFormGroup.controls.startSalary.value;
	 	let endSalary = this.gradesFormGroup.controls.endSalary.value;
	 	if(parseFloat(startSalary) > parseFloat(endSalary)){
 			this.errMsg = 'Start salary should be less than end salary';
 			return false;
 		}else{
	 		this.errMsg = '';
	 		return true;
	 	}
	 }

	/**
	*	Function used to submit grade details
	*/
	submitGrade(){
		if(this.validateSalary()){
			this.submitted = true;
	    	this.loadingService.show();
	    	this.commonService.addNewGrade(this.gradesFormGroup.getRawValue()).subscribe(
				data => {
					this.errMsg = '';
					this.successMsg = data.message;
	                this.gradesFormGroup.reset();
					this.getGradeID();
				},
				error => {
					this.successMsg = '';
					this.errMsg = error.error.message.message;
					this.loadingService.hide();
				}
			)
		}
    }    
}