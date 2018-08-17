import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
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