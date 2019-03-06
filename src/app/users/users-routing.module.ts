import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserAddComponent} from './user-add.component';
import {UserListComponent} from './user-list.component';
//import {UserEditComponent} from './user-edit.component';

@NgModule({
	imports: [
			RouterModule.forChild([{
				path: '',
				component: UsersComponent,
				children: [
					{path: '', component: UserListComponent},
					{path: 'add', component: UserAddComponent},
					//{path: 'edit/:id', component: UserEditComponent}
				]
			}])
		],
    exports: [RouterModule]		
})

export class UsersRoutingModule{}