import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';


const routes: Routes = [
  {path: '', redirectTo: '/employee-list', pathMatch: 'full'},
  {path:'employee-list', component:EmployeeListComponent},
  {path:'employee-list/:id',
  component:EmployeedetailsComponent,
  children: [
    {path: 'overview', component: EmployeeOverviewComponent},
    {path: 'contact', component: EmployeeContactComponent}
  ]
},
  {path:'department-list', component:DepartmentListComponent},
  {path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
