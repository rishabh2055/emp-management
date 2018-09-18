import {Component} from '@angular/core';

import {CommonService} from '../common.service';


@Component({
	templateUrl: './grades.component.html'
})

export class GradesComponent{
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