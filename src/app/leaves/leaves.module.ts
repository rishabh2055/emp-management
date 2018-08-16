import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeavesRoutingModule} from './leaves-routing.module';

import {LeavesComponent} from './leaves.component';

@NgModule({
	imports: [CommonModule, LeavesRoutingModule],
	declarations: [LeavesComponent]
})

export class LeavesModule{}