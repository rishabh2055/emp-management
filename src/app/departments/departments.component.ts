import {Component, OnInit, DoCheck} from '@angular/core';

import {CommonService} from '../common.service';


@Component({
	templateUrl: './departments.component.html',
	styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit, DoCheck{
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