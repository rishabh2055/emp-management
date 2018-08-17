import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LeavesComponent} from './leaves.component';

@NgModule({
	imports: [
			RouterModule.forChild([{
				path: '',
				component: LeavesComponent
			}])
		],
    exports: [RouterModule]		
})

export class LeavesRoutingModule{}