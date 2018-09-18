import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Grades} from './grades';
import {GradeEditComponent} from './grade-edit.component';
import {ConfirmationModalComponent} from '../confirmation-modal.component';

import {CommonService} from '../common.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';



@Component({
	templateUrl: './grade-list.component.html',
	styleUrls: ['./grades.component.css']
})

export class GradeListComponent implements OnInit{
	private grades: Array<Grades[]> = [];
	private page: number = 1;
	private totalPages: number = 14;
	private key: string = 'gradeId';
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
				this.deleteGrade(value);
			}else{
				this.getAllGrades();
			}
		});
	}
	ngOnInit(){
		this.getAllGrades();
	}
	getAllGrades(){
		this.spinnerService.show();
    	this.commonService.getAllGrades()
    		.subscribe(
    				(data: any) => {
    					this.grades = data.grades;
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
		const modalRefs = this.modalService.open(GradeEditComponent, { size: 'lg' });
		modalRefs.componentInstance.gradeObj = deptObj;
	}
	openConfirmationModal(deptObj){
		const modalRefs = this.modalService.open(ConfirmationModalComponent, {size: 'sm'});
		modalRefs.componentInstance.gradeObj = deptObj;
	}
	deleteGrade(grade){
		this.commonService.deleteGrade(grade).subscribe(
				data => {
					this.errMsg = '';
					this.successMsg = data.message;
					this.getAllGrades();
				},
				error => {
					this.successMsg = '';
					this.errMsg = error.error.message.message;
				}
			)
	}
}