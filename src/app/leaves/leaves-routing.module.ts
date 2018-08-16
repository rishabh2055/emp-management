import {NgModule} from '@angular/core';
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