import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';
import { Employee } from '../employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService : EmployeesService, private toastrService : ToastrService) { }

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  editEmployee(employee : Employee){

    this.employeeService.selectedEmployee = Object.assign({}, employee);

  }

  removeEmployee(id : number)
  {
    if(confirm("Are you sure you want to delete record ?") == true)
    {
      this.employeeService.deleteEmployee(id)
      .subscribe((data) => {
        this.employeeService.getEmployees(); // refresh the list after insert
        this.toastrService.warning("Employee Record delete Successfully", "Employee Records");
        console.log(data);
    });
  }
}


}
