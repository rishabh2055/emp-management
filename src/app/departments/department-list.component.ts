import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentsComponent} from './departments.component';
import {Departments} from './departments';
import {DepartmentEditComponent} from './department-edit.component';

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
	constructor(
		private commonService: CommonService, 
		private spinnerService: Ng4LoadingSpinnerService,
		private modalService: NgbModal
		){
		
	}
	ngOnInit(){
		this.getAllDepartments();
	}
	getAllDepartments(){
		this.spinnerService.show();
    	this.commonService.getAllDepartments()
    		.subscribe(
    				data => {
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
	updateDepartmentCallBack(){debugger
		this.getAllDepartments();
	}
}