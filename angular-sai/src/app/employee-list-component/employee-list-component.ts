import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list-component.html',
  styleUrls: ['./employee-list-component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = []; // Initialize with an empty array

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.http.get<any[]>('http://localhost:8080/api/v1/employees').subscribe({
      next: (response) => {
        this.employees = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
}
