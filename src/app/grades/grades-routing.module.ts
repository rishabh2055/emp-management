import {NgModule} from '@angular/core';
import {GradesComponent} from './grades.component';

@NgModule({
	imports: [
			RouterModule.forChild([{
				path: '',
				component: GradesComponent
			}])
		],
    exports: [RouterModule]		
})

export class GradesRoutingModule{}