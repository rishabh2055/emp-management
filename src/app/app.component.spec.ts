import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {HttpClientModule} from '@angular/common/http';
import { Router, Routes} from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {DepartmentsModule} from './departments/departments.module';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DepartmentsComponent} from './departments/departments.component';

import {CommonService} from './common.service';
describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let onChangeRoute;
  let sideMenuLinks: Array<any> = [
    {id: 1, menu: 'Dashboard', isActive: true, isCollapsed: false, route: '/dashboard', url: 'dashboard', icon: 'dashboard', children: []},
  ];
  let location: Location;
  let router: Router;
  let commonService: CommonService;
  let setCurrentRoute;
  let routes: Routes = [
    {path: 'departments', component: DepartmentsComponent}
    {path: 'departments/add', component: DepartmentsComponent}
    {path: 'grades', component: DepartmentsComponent}
    {path: 'grades/add', component: DepartmentsComponent}
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent
      ],
      imports: [
        NgbModule.forRoot(),
        Ng4LoadingSpinnerModule.forRoot(),
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
        DepartmentsModule
      ],
      providers:[
        {provide: APP_BASE_HREF, useValue: '/'},
        CommonService
      ]
    }).compileComponents();
  }));

  describe('AppComponent class block', () => {
    beforeEach(async() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      commonService = fixture.debugElement.injector.get(CommonService);
      onChangeRoute = spyOn(app, 'onChangeRoute').and.callThrough();
      router = TestBed.get(Router);
      location = TestBed.get(Location);
      router.initialNavigation();
      setCurrentRoute = spyOn(commonService, 'setCurrentRoute').and.callThrough();
    });

    it('SPEC:: specs for ngOnInit function', async(() => {
      expect(app.ngOnInit).toBeDefined();
      app.ngOnInit();
      expect(onChangeRoute).toHaveBeenCalled();
    }));

    it('SPEC:: specs for onChangeRoute function:: check for departments navigation', async(() => {
      router.navigate(['/departments']);
      app.onChangeRoute();
    }));
    it('SPEC:: specs for onChangeRoute function:: check for /departments/add navigation', async(() => {
      router.navigate(['/departments/add']);
      app.onChangeRoute();
    }));
    it('SPEC:: specs for onChangeRoute function:: check for /grades navigation', async(() => {
      router.navigate(['/grades']);
      app.onChangeRoute();
    }));
    it('SPEC:: specs for onChangeRoute function:: check for /grades/add navigation', async(() => {
      router.navigate(['/grades/add']);
      app.onChangeRoute();
    }));
    it('SPEC:: specs for collapseSideMenu function', async(() => {
      let obj = {id: 1, menu: 'Dashboard', isActive: true, isCollapsed: false, route: '/dashboard', url: 'dashboard', icon: 'dashboard', children: []};
      app.collapseSideMenu(obj);
    }));
  })
});
