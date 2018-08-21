import {Component, OnInit} from '@angular/core';
import {DepartmentsComponent} from './departments.component';


@Component({
	templateUrl: './department-list.component.html',
	styleUrls: ['./departments.component.css']
})

export class DepartmentListComponent implements OnInit{
	private departments: Array<any> = [
		{departmentID: 'DEPT01', departmentName: 'Department 1', description: 'Description description'},
		{departmentID: 'DEPT02', departmentName: 'Department 2', description: 'Description description'},
		{departmentID: 'DEPT03', departmentName: 'Department 3', description: 'Description description'},
		{departmentID: 'DEPT04', departmentName: 'Department 4', description: 'Description description'},
		{departmentID: 'DEPT05', departmentName: 'Department 5', description: 'Description description'},
		{departmentID: 'DEPT06', departmentName: 'Department 6', description: 'Description description'},
		{departmentID: 'DEPT07', departmentName: 'Department 7', description: 'Description description'},
		{departmentID: 'DEPT08', departmentName: 'Department 8', description: 'Description description'},
		{departmentID: 'DEPT09', departmentName: 'Department 9', description: 'Description description'},
		{departmentID: 'DEPT10', departmentName: 'Department 10', description: 'Description description'},
		{departmentID: 'DEPT11', departmentName: 'Department 11', description: 'Description description'},
		{departmentID: 'DEPT12', departmentName: 'Department 12', description: 'Description description'},
		{departmentID: 'DEPT13', departmentName: 'Department 13', description: 'Description description'},
		{departmentID: 'DEPT14', departmentName: 'Department 14', description: 'Description description'},
		{departmentID: 'DEPT01', departmentName: 'Department 1', description: 'Description description'},
		{departmentID: 'DEPT02', departmentName: 'Department 2', description: 'Description description'},
		{departmentID: 'DEPT03', departmentName: 'Department 3', description: 'Description description'},
		{departmentID: 'DEPT04', departmentName: 'Department 4', description: 'Description description'},
		{departmentID: 'DEPT05', departmentName: 'Department 5', description: 'Description description'},
		{departmentID: 'DEPT06', departmentName: 'Department 6', description: 'Description description'},
		{departmentID: 'DEPT07', departmentName: 'Department 7', description: 'Description description'},
		{departmentID: 'DEPT08', departmentName: 'Department 8', description: 'Description description'},
		{departmentID: 'DEPT09', departmentName: 'Department 9', description: 'Description description'},
		{departmentID: 'DEPT10', departmentName: 'Department 10', description: 'Description description'},
		{departmentID: 'DEPT11', departmentName: 'Department 11', description: 'Description description'},
		{departmentID: 'DEPT12', departmentName: 'Department 12', description: 'Description description'},
		{departmentID: 'DEPT13', departmentName: 'Department 13', description: 'Description description'},
		{departmentID: 'DEPT14', departmentName: 'Department 14', description: 'Description description'},
		{departmentID: 'DEPT01', departmentName: 'Department 1', description: 'Description description'},
		{departmentID: 'DEPT02', departmentName: 'Department 2', description: 'Description description'},
		{departmentID: 'DEPT03', departmentName: 'Department 3', description: 'Description description'},
		{departmentID: 'DEPT04', departmentName: 'Department 4', description: 'Description description'},
		{departmentID: 'DEPT05', departmentName: 'Department 5', description: 'Description description'},
		{departmentID: 'DEPT06', departmentName: 'Department 6', description: 'Description description'},
		{departmentID: 'DEPT07', departmentName: 'Department 7', description: 'Description description'},
		{departmentID: 'DEPT08', departmentName: 'Department 8', description: 'Description description'},
		{departmentID: 'DEPT09', departmentName: 'Department 9', description: 'Description description'},
		{departmentID: 'DEPT10', departmentName: 'Department 10', description: 'Description description'},
		{departmentID: 'DEPT11', departmentName: 'Department 11', description: 'Description description'},
		{departmentID: 'DEPT12', departmentName: 'Department 12', description: 'Description description'},
		{departmentID: 'DEPT13', departmentName: 'Department 13', description: 'Description description'},
		{departmentID: 'DEPT14', departmentName: 'Department 14', description: 'Description description'}
	];
	private page: number = 1;
	private totalPages: number = 14;
	private key: string = 'departmentID';
	private reverse: boolean = false;
	constructor(){
		
	}
	ngOnInit(){
		
	}
	sort(key){
		this.key = key;
		this.reverse = !this.reverse;
	}
}