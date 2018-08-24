import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CommonService} from '../common.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
	selector: 'department-edit-modal',
	templateUrl: './department-edit.component.html',
	styleUrls: ['./departments.component.css']
})

export class DepartmentEditComponent implements OnInit{
	@Input() departmentObj: any;
	@Output() savedDepartment: EventEmitter<any> = new EventEmitter(); 
	departmentFormGroup: FormGroup;
	submitted: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	constructor(
		private activeModal: NgbActiveModal,
		private formBuilder: FormBuilder, 
		private commonService: CommonService,
		private spinnerService: Ng4LoadingSpinnerService
		){
		
	}
	ngOnInit(){
		this.departmentFormGroup = this.formBuilder.group({
			departmentID: [{value: this.departmentObj.departmentId, disabled: true}],
			departmentName: [this.departmentObj.departmentName, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
			departmentDesc: [this.departmentObj.departmentDesc, [Validators.minLength(4), Validators.maxLength(100)]],
		});
	}

	onSubmit(){
    	this.submitted = true;
    	this.spinnerService.show();
    	let postObj = {
    		_id: this.departmentObj._id,
    		departmentId: this.departmentFormGroup.getRawValue().departmentId,
    		departmentName: this.departmentFormGroup.getRawValue().departmentName,
    		departmentDesc: this.departmentFormGroup.getRawValue().departmentDesc,
    	}
    	this.commonService.updateDepartment(postObj).subscribe(
			data => {
				this.errMsg = '';
				this.successMsg = data.message;
				this.activeModal.dismiss();
				this.savedDepartment.emit('updateDepartmentCallBack');
				this.spinnerService.hide();
			},
			error => {
				this.successMsg = '';
				this.errMsg = error.error.message.message;
				this.spinnerService.hide();
			}
		)
    }
}