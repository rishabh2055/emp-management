import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { DepartmentEditComponent } from './departments/department-edit.component';
import { ConfirmationModalComponent } from './confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, 
    LoginComponent,
    DepartmentEditComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DepartmentEditComponent, ConfirmationModalComponent]
})
export class AppModule { }
