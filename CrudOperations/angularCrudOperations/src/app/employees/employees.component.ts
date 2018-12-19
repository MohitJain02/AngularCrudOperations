import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './shared/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers : [EmployeesService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService : EmployeesService) { }

  ngOnInit() {
  }

}
