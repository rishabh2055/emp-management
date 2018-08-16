import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GradesRoutingModule} from './grades-routing.module';

import {GradesComponent} from './grades.component';

@NgModule({
	imports: [CommonModule, GradesRoutingModule],
	declarations: [GradesComponent]
})

export class GradesModule{}