import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {GradesComponent} from './grades.component';
import {GradeAddComponent} from './grade-add.component';
import {GradeListComponent} from './grade-list.component';

@NgModule({
	imports: [
			RouterModule.forChild([{
				path: '',
				component: GradesComponent,
				children: [
					{path: '', component: GradeListComponent},
					{path: 'add', component: GradeAddComponent}
				]
			}])
		],
    exports: [RouterModule]		
})

export class GradesRoutingModule{}