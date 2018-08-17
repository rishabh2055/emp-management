import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepartmentsRoutingModule} from './departments-routing.module';

import {DepartmentsComponent} from './departments.component';
import {DepartmentAddComponent} from './department-add.component';
import {DepartmentListComponent} from './department-list.component';

@NgModule({
	imports: [CommonModule, DepartmentsRoutingModule],
	declarations: [DepartmentsComponent, DepartmentAddComponent, DepartmentListComponent]
})

export class DepartmentsModule{}