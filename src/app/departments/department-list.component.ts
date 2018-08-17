import {Component, OnInit} from '@angular/core';
import {DepartmentsComponent} from './departments.component';


@Component({
	templateUrl: './department-list.component.html'
})

export class DepartmentListComponent implements OnInit{
	constructor(){
		
	}
	ngOnInit(){
		DepartmentsComponent.currentRoute = 'list';
		console.log('currentRoute', DepartmentsComponent.currentRoute);
	}
}