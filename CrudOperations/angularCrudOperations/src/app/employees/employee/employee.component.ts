import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeesService, private toasterService :ToastrService){}
  ngOnInit() {
    this.resetForm();
  }


  resetForm(form? : NgForm)
  {
    if(form !=  null)
      form.resetForm();

    this.employeeService.selectedEmployee = {
      EmployeeId : null,
      Position : '',
      EmpCode : '',
      Office : '',
      FirstName :'',
      LastName : ''
    }
  }

  onSubmit(form : NgForm)
  {
    if(form.value.EmployeeId == null)
    {
    this.employeeService.postEmployee(form.value)
    .subscribe((data) => {
      this.resetForm(form);
      this.employeeService.getEmployees(); // refresh the list after insert
      this.toasterService.success("Employee Record added Successfully", "Employee Records");
      console.log(data);
    })
  }
  else
  {
    this.employeeService.putEmployee(form.value, form.value.EmployeeId)
    .subscribe((data) => {
      this.resetForm(form);
      this.employeeService.getEmployees(); // refresh the list after insert
      this.toasterService.info("Employee Record updated Successfully", "Employee Records");
      console.log(data);
    })
  }
  }
}
