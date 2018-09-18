import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import {GradesRoutingModule} from './grades-routing.module';

import {GradesComponent} from './grades.component';
import {GradeAddComponent} from './grade-add.component';
import {GradeListComponent} from './grade-list.component';

@NgModule({
	imports: [
		CommonModule, 
		GradesRoutingModule,
		NgxPaginationModule, 
		Ng2SearchPipeModule, 
		Ng2OrderModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [GradesComponent, GradeAddComponent, GradeListComponent]
})

export class GradesModule{}