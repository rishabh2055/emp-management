import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import {Departments} from './departments/departments';
import {Grades} from './grades/grades';
//import {Users} from './users/users';

const httpHeaders = {
	headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({providedIn: 'root'})

export class CommonService{
	currentRoute: string = '';
	invokeEvent: Subject<any> = new Subject();
	serverUrl = 'http://localhost:4000/api';
	currentUrl = '';
	constructor(private http: HttpClient){}
	getCurrentUrl(){
		return this.currentUrl;
	}
	callSecondComponentMethod(msg){
		this.invokeEvent.next(msg);
	}
	setCurrentRoute(route: string): void{
		this.currentRoute = route;
	}
	getCurrentRoute(): string{
		return this.currentRoute;
	}
	getDepartmentID(): Observable<any>{
		let url = `${this.serverUrl}/departments/get_dept_id`;
		return this.http.get(url, httpHeaders);
	}
	addNewDepartment(postObj): Observable<any>{
		let url = `${this.serverUrl}/departments/new_dept`;
		return this.http.post(url, postObj, httpHeaders);
	}
	updateDepartment(postObj): Observable<any>{
		let url = `${this.serverUrl}/departments/update_dept`;
		return this.http.post(url, postObj, httpHeaders);
	}
	deleteDepartment(postObj): Observable<any>{
		let url = `${this.serverUrl}/departments/delete_dept`;
		return this.http.post(url, postObj, httpHeaders);
	}
	getAllDepartments(): Observable<Departments[]>{
		let url = `${this.serverUrl}/departments/list_dept`;
		return this.http.get<Departments[]>(url, httpHeaders);
	}
	getGradeID(): Observable<any>{
		let url = `${this.serverUrl}/grades/get_grade_id`;
		return this.http.get(url, httpHeaders);
	}
	addNewGrade(postObj): Observable<any>{
		let url = `${this.serverUrl}/grades/new_grade`;
		return this.http.post(url, postObj, httpHeaders);
	}
	updateGrade(postObj): Observable<any>{
		let url = `${this.serverUrl}/grades/update_grade`;
		return this.http.put(url, postObj, httpHeaders);
	}
	deleteGrade(postObj): Observable<any>{
		let url = `${this.serverUrl}/grades/delete_grade`;
		return this.http.post(url, postObj);
	}
	getAllGrades(): Observable<Grades[]>{
		let url = `${this.serverUrl}/grades/list_grades`;
		return this.http.get<Grades[]>(url, httpHeaders);
	}
	getEmployeeeID(): Observable<any>{
		let url = `${this.serverUrl}/employees/get_emp_id`;
		return this.http.get(url, httpHeaders);
	}
	addNewEmployee(postObj): Observable<any>{
		let url = `${this.serverUrl}/employees/new_emp`;
		return this.http.post(url, postObj, httpHeaders);
	}
	updateEmployee(postObj): Observable<any>{
		let url = `${this.serverUrl}/employees/update_emp`;
		return this.http.put(url, postObj, httpHeaders);
	}
	deleteEmployee(postObj): Observable<any>{
		let url = `${this.serverUrl}/employees/delete_emp`;
		return this.http.post(url, postObj);
	}
	getAllEmployees(): Observable<Grades[]>{
		let url = `${this.serverUrl}/employees/list_emp`;
		return this.http.get<Grades[]>(url, httpHeaders);
	}
	submitLogin(postObj): Observable<any>{
		let url = `${this.serverUrl}/users/login`;
		return this.http.post(url, postObj, httpHeaders);
	}
	submitUser(postObj): Observable<any>{
		let url = `${this.serverUrl}/users/signup`;
		return this.http.post(url, postObj, httpHeaders);
	}
	getAllUsers(): Observable<any[]>{
		let url = `${this.serverUrl}/users/list_users`;
		return this.http.get<any[]>(url, httpHeaders);
	}
}