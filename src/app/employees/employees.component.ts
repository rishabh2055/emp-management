import {Component, OnInit, DoCheck} from '@angular/core';

import {CommonService} from '../common.service';


@Component({
	templateUrl: './employees.component.html'
})

export class EmployeesComponent implements OnInit, DoCheck{
	currentRoute: string = '';
	constructor(private commonService: CommonService){

	}
	ngOnInit(){
		this.currentRoute = this.commonService.getCurrentRoute();
	}
	ngDoCheck(){
		this.currentRoute = this.commonService.getCurrentRoute();
	}
}