import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public employees =[];
public employeeId;
  constructor(private _employeeService: EmployeeserviceService,private activatedroute: ActivatedRoute,
    private route : Router) { }//dependency injection

  ngOnInit() {

    //this._employeeService.getEmployees().subscribe(data => this.employees = data);
    let id= parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    //snapshot to give snapshot of current route
//parammap to get the parameter from the url
    this.employeeId = id;
  }
  selectOverview(){
    this.route.navigate(['overview'],{relativeTo : this.activatedroute});
  }
  selectContact(){
    this.route.navigate(['contact'],{relativeTo : this.activatedroute});
  }
}
