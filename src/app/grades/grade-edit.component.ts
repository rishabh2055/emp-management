import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CommonService} from '../common.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
	selector: 'grade-edit-modal',
	templateUrl: './grade-edit.component.html',
	styleUrls: ['./grades.component.css']
})

export class GradeEditComponent implements OnInit{
	@Input() gradeObj: any;
	gradesFormGroup: FormGroup;
	submitted: boolean = false;
	errMsg: String = '';
	constructor(
		private activeModal: NgbActiveModal,
		private formBuilder: FormBuilder, 
		private commonService: CommonService,
		private spinnerService: Ng4LoadingSpinnerService
		){
		
	}
	ngOnInit(){
		this.gradesFormGroup = this.formBuilder.group({
			gradeId: [{value: this.gradeObj.gradeId, disabled: true}, Validators.required],
			gradeName: [{value: this.gradeObj.gradeName, disabled: true}, [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
			startSalary: [this.gradeObj.gradeStartSalary, [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[0-9.]+$/)]],
			endSalary: [this.gradeObj.gradeEndSalary, [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern(/^[0-9.]+$/)]],
			gradeDesc: [this.gradeObj.gradeDescription, [Validators.minLength(4), Validators.maxLength(100)]]
		});
	}

	// convenience getter for easy access to form fields
    get f() { return this.gradesFormGroup.controls; }

	submitGrade(){
    	this.submitted = true;
    	this.spinnerService.show();
    	let postObj = {
    		_id: this.gradeObj._id,
    		startSalary: this.gradesFormGroup.getRawValue().startSalary,
    		endSalary: this.gradesFormGroup.getRawValue().endSalary,
    		gradeDesc: this.gradesFormGroup.getRawValue().gradeDesc,
    	}
    	this.commonService.updateGrade(postObj).subscribe(
			data => {
				this.errMsg = '';
				this.activeModal.dismiss();
				this.spinnerService.hide();
				this.commonService.callSecondComponentMethod(data.message);
			},
			error => {
				this.errMsg = error.error.message.message;
				this.spinnerService.hide();
			}
		)
    }
}