import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {CommonService} from './common.service';

@Component({
	selector: 'confirmation-modal.component',
	templateUrl: './confirmation-modal.component.html'
})

export class ConfirmationModalComponent{
	@Input() departmentObj: any;
	constructor(private activeModal: NgbActiveModal, private commonService: CommonService){}
	yesDelete(){
		this.activeModal.dismiss();
		this.commonService.callSecondComponentMethod(this.departmentObj);
	}
}