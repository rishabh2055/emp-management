import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import {CommonService} from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isCollapsed: boolean = false;
  public isSideBarCollapsed: boolean = false;
  public isUserDropDownCollapsed: boolean = false;
  private sideMenuLinks: Array<any> = [
    {id: 1, menu: 'Dashboard', isActive: true, isCollapsed: false, route: '/dashboard', url: 'dashboard', icon: 'dashboard', children: []},
    {id: 2, menu: 'Departments', isActive: false, isCollapsed: false, icon: 'home', children: [
      {id: 1, submenu: 'Add new department', route: '/dashboard/add', url: 'departments/add'},
      {id: 1, submenu: 'Departments', route: '/dashboard', url: 'departments'}
    ]},
    {id: 3, menu: 'Grades', isActive: false, isCollapsed: false, icon: 'graduation-cap', children: [
      {id: 1, submenu: 'Add new grade', route: '/grades/add', url: 'grades/add'},
      {id: 1, submenu: 'Grades', route: '/grades', url: 'grades'}
    ]},
    {id: 4, menu: 'Employees', isActive: false, isCollapsed: false, icon: 'users', children: [
      {id: 1, submenu: 'Add new employee', route: '/employees/add', url: 'employees/add'},
      {id: 1, submenu: 'Employees', route: '/employees', url: 'employees'}
    ]}
  ]
  constructor(private router: Router, private commonService: CommonService){}
  ngOnInit(){
  	this.onChangeRoute();
  }
  onChangeRoute(){
		this.router.events.subscribe(events => {
			if(events instanceof NavigationStart){
				if(events.url === '/departments'){
					this.commonService.setCurrentRoute('Department list');
				}else if(events.url === '/departments/add'){
					this.commonService.setCurrentRoute('Add new Department');
				}else if(events.url === '/grades'){
          this.commonService.setCurrentRoute('Grades list');
        }else if(events.url === '/grades/add'){
          this.commonService.setCurrentRoute('Add new Grade');
        }else if(events.url === '/employees'){
          this.commonService.setCurrentRoute('Employees list');
        }else if(events.url === '/employees/add'){
          this.commonService.setCurrentRoute('Add new employee');
        }else if(events.url === '/employees/edit'){
          this.commonService.setCurrentRoute('Update employee');
        }else if(events.url === '/employees/view'){
          this.commonService.setCurrentRoute('View employee');
        }
        this.sideMenuLinks.forEach(menu => {
          if(menu.route === events.url){
            menu.isActive = true;
          }else{
            menu.isActive = false;
          }
        });
			}
		})
	}
  collapseSideMenu(obj){
    this.sideMenuLinks.forEach(menu => {
      if(menu.id === obj.id){
        menu.isCollapsed = !menu.isCollapsed;
      }else{
        menu.isCollapsed = false;
      }
    });
  }
}
