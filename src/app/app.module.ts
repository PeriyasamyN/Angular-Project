import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeserviceService } from './employeedetails/employeeservice.service';
import { GameComponent } from './game/game.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { env } from 'process';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeedetailsComponent,
    EmployeeListComponent,
    GameComponent,
    DepartmentListComponent,
    PageNotFoundComponent,
    EmployeeOverviewComponent,
    EmployeeContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule,
    NgBootstrapFormValidationModule.forRoot()

  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
