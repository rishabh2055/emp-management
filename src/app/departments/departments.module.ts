import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import {DepartmentsRoutingModule} from './departments-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import {DepartmentsComponent} from './departments.component';
import {DepartmentAddComponent} from './department-add.component';
import {DepartmentListComponent} from './department-list.component';

@NgModule({
	imports: [
		CommonModule, 
		DepartmentsRoutingModule, 
		NgxPaginationModule, 
		Ng2SearchPipeModule, 
		Ng2OrderModule,
		FormsModule,
		ReactiveFormsModule,
		Ng4LoadingSpinnerModule
		],
	declarations: [DepartmentsComponent, DepartmentAddComponent, DepartmentListComponent]
})

export class DepartmentsModule{}