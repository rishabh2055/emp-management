import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import {EmployeesRoutingModule} from './employees-routing.module';

import {EmployeesComponent} from './employees.component';
import {EmployeesListComponent} from './employees-list.component';
import {EmployeeAddComponent} from './employee-add.component';
import {EmployeeEditComponent} from './employee-edit.component';

@NgModule({
	imports: [
		CommonModule, 
		EmployeesRoutingModule, 
		NgxPaginationModule, 
		Ng2SearchPipeModule, 
		Ng2OrderModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [EmployeesComponent, EmployeesListComponent, EmployeeAddComponent, EmployeeEditComponent]
})

export class EmployeesModule{}