import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GradesRoutingModule} from './grades-routing.module';

import {GradesComponent} from './grades.component';
import {GradeAddComponent} from './grade-add.component';
import {GradeListComponent} from './grade-list.component';

@NgModule({
	imports: [CommonModule, GradesRoutingModule],
	declarations: [GradesComponent, GradeAddComponent, GradeListComponent]
})

export class GradesModule{}