import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Departments} from './departments/departments';

const httpHeaders = {
	headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({providedIn: 'root'})

export class CommonService{
	currentRoute: string = '';
	serverUrl = 'http://localhost:4000/api/departments';
	constructor(private http: HttpClient){}
	setCurrentRoute(route: string): void{
		this.currentRoute = route;
	}
	getCurrentRoute(): string{
		return this.currentRoute;
	}
	getDepartmentID(): Observable<any>{
		let url = `${this.serverUrl}/get_dept_id`;
		return this.http.get(url, httpHeaders);
	}
	addNewDepartment(postObj): Observable<any>{
		let url = `${this.serverUrl}/new_dept`;
		return this.http.post(url, postObj, httpHeaders);
	}
	updateDepartment(postObj): Observable<any>{
		let url = `${this.serverUrl}/update_dept`;
		return this.http.post(url, postObj, httpHeaders);
	}
	getAllDepartments(): Observable<Departments[]>{
		let url = `${this.serverUrl}/list_dept`;
		return this.http.get<Departments[]>(url, httpHeaders);
	}
}