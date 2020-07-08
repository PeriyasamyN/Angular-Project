import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeedetails/employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees =[];

  constructor(private _employeeService: EmployeeserviceService,private router: Router) { }//dependency injection

  ngOnInit() {

    this._employeeService.getEmployees().subscribe(data => this.employees = data);

  }
onSelect(employee){
  this.router.navigate(['/employee-list',employee.id]);
}
}
