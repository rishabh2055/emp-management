import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DepartmentsComponent} from './departments.component';
import {DepartmentAddComponent} from './department-add.component';
import {DepartmentListComponent} from './department-list.component';

@NgModule({
	imports: [
			RouterModule.forChild([{
				path: '',
				component: DepartmentsComponent,
				children: [
					{path: '', component: DepartmentListComponent},
					{path: 'add', component: DepartmentAddComponent}
				]
			}])
		],
    exports: [RouterModule]		
})

export class DepartmentsRoutingModule{}