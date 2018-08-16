import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepartmentsRoutingModule} from './departments-routing.module';

import {DepartmentsComponent} from './departments.component';

@NgModule({
	imports: [CommonModule, DepartmentsRoutingModule],
	declarations: [DepartmentsComponent]
})

export class DepartmentsModule{}