import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {EmployeesComponent} from './employees.component';
import {EmployeesListComponent} from './employees-list.component';
import {EmployeeAddComponent} from './employee-add.component';
import {EmployeeEditComponent} from './employee-edit.component';

@NgModule({
	imports: [
			RouterModule.forChild([{
				path: '',
				component: EmployeesComponent,
				children: [
					{path: '', component: EmployeesListComponent},
					{path: 'add', component: EmployeeAddComponent},
					{path: 'edit', component: EmployeeEditComponent},
					{path: 'view', component: EmployeeEditComponent}
				]
			}])
		],
    exports: [RouterModule]		
})

export class EmployeesRoutingModule{}