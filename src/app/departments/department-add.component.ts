import {Component, OnInit} from '@angular/core';
import {DepartmentsComponent} from './departments.component';


@Component({
	templateUrl: './department-add.component.html'
})

export class DepartmentAddComponent extends DepartmentsComponent implements OnInit{
	constructor(){
		super();
	}
	ngOnInit(){
		this.currentRoute = 'add';
	}
}