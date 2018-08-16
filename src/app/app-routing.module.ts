import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
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