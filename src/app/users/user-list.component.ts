import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
//import {Users} from './users';

import {CommonService} from '../common.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';



@Component({
	templateUrl: './user-list.component.html',
	styleUrls: ['./users.component.css']
})

export class UserListComponent implements OnInit{
	private users: Array<any[]> = [];
	private page: number = 1;
	private totalPages: number = 14;
	private key: string = 'userEmail';
	private reverse: boolean = false;
	successMsg: String = '';
	errMsg: String = '';
	constructor(
		private commonService: CommonService, 
		private spinnerService: Ng4LoadingSpinnerService,
		private modalService: NgbModal
		)
	{
		
	}
	ngOnInit(){
		this.getAllUsers();
	}
	getAllUsers(){
		this.spinnerService.show();
    	this.commonService.getAllUsers()
    		.subscribe(
    				(data: any) => {
    					this.users = data.users;
    					this.spinnerService.hide();
    					this.errMsg = '';
    				},
    				error => {debugger
    					this.spinnerService.hide();
    					this.errMsg = error.message;
    				}
    			)
	}
	sort(key){
		this.key = key;
		this.reverse = !this.reverse;
	}
}