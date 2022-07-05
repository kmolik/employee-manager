import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private apiServerUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient ) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/update`, employee);
  }

  public deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiServerUrl}/delete/${id}`);
  }

}
