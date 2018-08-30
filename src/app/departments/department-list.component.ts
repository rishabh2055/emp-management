import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentsComponent} from './departments.component';
import {Departments} from './departments';
import {DepartmentEditComponent} from './department-edit.component';
import {ConfirmationModalComponent} from '../confirmation-modal.component';

import {CommonService} from '../common.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';



@Component({
	templateUrl: './department-list.component.html',
	styleUrls: ['./departments.component.css']
})

export class DepartmentListComponent implements OnInit{
	private departments: Array<Departments[]> = [];
	private page: number = 1;
	private totalPages: number = 14;
	private key: string = 'departmentID';
	private reverse: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	constructor(
		private commonService: CommonService, 
		private spinnerService: Ng4LoadingSpinnerService,
		private modalService: NgbModal
		)
	{
		this.commonService.invokeEvent.subscribe(value => {
			this.successMsg = value;
			if(value instanceof Object){
				this.deleteDepartment(value);
			}else{
				this.getAllDepartments();
			}
		});
	}
	ngOnInit(){
		this.getAllDepartments();
	}
	getAllDepartments(){
		this.spinnerService.show();
    	this.commonService.getAllDepartments()
    		.subscribe(
    				(data: any) => {
    					this.departments = data.departments;
    					this.spinnerService.hide();
    				},
    				error => {
    					this.spinnerService.hide();
    				}
    			)
	}
	sort(key){
		this.key = key;
		this.reverse = !this.reverse;
	}
	openModal(deptObj){
		const modalRefs = this.modalService.open(DepartmentEditComponent, { size: 'lg' });
		modalRefs.componentInstance.departmentObj = deptObj;
	}
	openConfirmationModal(deptObj){
		const modalRefs = this.modalService.open(ConfirmationModalComponent, {size: 'sm'});
		modalRefs.componentInstance.departmentObj = deptObj;
	}
	deleteDepartment(dept){
		this.commonService.deleteDepartment(dept).subscribe(
				data => {
					this.errMsg = '';
					this.successMsg = data.message;
					this.getAllDepartments();
				},
				error => {
					this.successMsg = '';
					this.errMsg = error.error.message.message;
				}
			)
	}
}