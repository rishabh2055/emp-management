import {TestBed, getTestBed, async} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Subject} from 'rxjs';

import {CommonService} from './common.service';

describe('CommonService', () => {
	let injector: TestBed;
	let service: CommonService;
	let httpMock: HttpTestingController;
	let invokeEvent: Subject<any> = new Subject();
	let dummyResponse = [{
		_id: 124346,
		departmentId: "DEPT01",
		departmentName: "Test",
		departmentDesc: "Test"
	}];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CommonService]
		});
		injector = getTestBed();
		service = injector.get(CommonService);
		httpMock = injector.get(HttpTestingController);
		spyOn(invokeEvent, 'next').and.callThrough();
	});
	afterEach(() => {
		httpMock.verify();
	});

	describe('callSecondComponentMethod function block', () => {
		it('SPEC:: spec for check callSecondComponentMethod to be defined', async(() =>{
			expect(service.callSecondComponentMethod).toBeDefined();
		}));
		it('SPEC:: spec for callSecondComponentMethod function definition', async(() =>{
			let msg = 'some message';
			service.callSecondComponentMethod(msg);
		}));
	});

	describe('setCurrentRoute function block', () => {
		it('SPEC:: spec for check setCurrentRoute to be defined', async(() =>{
			expect(service.setCurrentRoute).toBeDefined();
		}));
		it('SPEC:: spec for setCurrentRoute function definition', async(() =>{
			let routes = 'some routes';
			service.setCurrentRoute(routes);
			expect(service.currentRoute).toEqual(routes);
		}));
	});

	describe('getCurrentRoute function block', () => {
		it('SPEC:: spec for check getCurrentRoute to be defined', async(() =>{
			expect(service.getCurrentRoute).toBeDefined();
		}));
		it('SPEC:: spec for getCurrentRoute function definition', async(() =>{
			service.getCurrentRoute();
			expect(service.getCurrentRoute()).toEqual(service.currentRoute);
		}));
	});

	describe('getDepartmentID function block', () => {
		it('SPEC:: spec for check getDepartmentID to be defined', async(() =>{
			expect(service.getDepartmentID).toBeDefined();
		}));
		it('SPEC:: spec for getDepartmentID function:: it should return an observable', async(() =>{
			const dummyResponse = [{departmentId: '1234'}];
			service.getDepartmentID().subscribe(result => {
				expect(result.length).toBe(1);
				expect(result).toEqual(dummyResponse);
			});
			const request = httpMock.expectOne(`${service.serverUrl}/get_dept_id`);
			expect(request.request.method).toBe('GET');
			request.flush(dummyResponse);
		}));
	});

	describe('addNewDepartment function block', () => {
		it('SPEC:: spec for check addNewDepartment to be defined', async(() =>{
			expect(service.addNewDepartment).toBeDefined();
		}));
		it('SPEC:: spec for addNewDepartment function:: it should return an observable', async(() =>{
			const postObj = {};
			service.addNewDepartment(postObj).subscribe(result => {
				expect(result.length).toBe(1);
				expect(result).toEqual(dummyResponse);
			});
			const request = httpMock.expectOne(`${service.serverUrl}/new_dept`);
			expect(request.request.method).toBe('POST');
			request.flush(dummyResponse);
		}));
	});

	describe('updateDepartment function block', () => {
		it('SPEC:: spec for check updateDepartment to be defined', async(() =>{
			expect(service.updateDepartment).toBeDefined();
		}));
		it('SPEC:: spec for updateDepartment function:: it should return an observable', async(() =>{
			const postObj = {};
			service.updateDepartment(postObj).subscribe(result => {
				expect(result.length).toBe(1);
				expect(result).toEqual(dummyResponse);
			});
			const request = httpMock.expectOne(`${service.serverUrl}/update_dept`);
			expect(request.request.method).toBe('POST');
			request.flush(dummyResponse);
		}));
	});

	describe('getAllDepartments function block', () => {
		it('SPEC:: spec for check getAllDepartments to be defined', async(() =>{
			expect(service.getAllDepartments).toBeDefined();
		}));
		it('SPEC:: spec for getAllDepartments function:: it should return an observable', async(() =>{
			service.getAllDepartments().subscribe(result => {
				expect(result.length).toBe(1);
				expect(result).toEqual(dummyResponse);
			});
			const request = httpMock.expectOne(`${service.serverUrl}/list_dept`);
			expect(request.request.method).toBe('GET');
			request.flush(dummyResponse);
		}));
	});

	describe('deleteDepartment function block', () => {
		it('SPEC:: spec for check deleteDepartment to be defined', async(() =>{
			expect(service.deleteDepartment).toBeDefined();
		}));
		it('SPEC:: spec for deleteDepartment function:: it should return an observable', async(() =>{
			const postObj = {};
			service.deleteDepartment(postObj).subscribe(result => {
				expect(result.length).toBe(1);
				expect(result).toEqual(dummyResponse);
			});
			const request = httpMock.expectOne(`${service.serverUrl}/delete_dept`);
			expect(request.request.method).toBe('POST');
			request.flush(dummyResponse);
		}));
	});
})