import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'login', component: 'LoginComponent'},
	{path: 'signup', loadChildren: './users/users.module#LoginModule'},
	{path: 'dashboard', component: 'DashboardComponent'},
	{path: 'departments', loadChildren: './departments/departments.module#DepartmentsModule'},
	{path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
	{path: 'grades', loadChildren: './grades/grades.module#GradesModule'},
	{path: 'employees', loadChildren: './employees/employees.module#EmployeesModule'},
	{path: 'leaves', loadChildren: './leaves/leaves.module#LeavesModule'},
	{path: 'attendance', loadChildren: './attendance/attendance.module#AttendanceModule'},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{}