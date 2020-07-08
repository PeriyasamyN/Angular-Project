import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
 url="../assets/json/employees.json"

  constructor( private http: HttpClient) {

  }
  getEmployees(): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url);  //cast observable in to employee array
  }
}
