import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeesRoutingModule} from './employees-routing.module';

import {EmployeesComponent} from './employees.component';
import {EmployeesListComponent} from './employees-list.component';
import {EmployeeAddComponent} from './employee-add.component';
import {EmployeeEditComponent} from './employee-edit.component';

@NgModule({
	imports: [CommonModule, EmployeesRoutingModule],
	declarations: [EmployeesComponent, EmployeesListComponent, EmployeeAddComponent, EmployeeEditComponent]
})

export class EmployeesModule{}