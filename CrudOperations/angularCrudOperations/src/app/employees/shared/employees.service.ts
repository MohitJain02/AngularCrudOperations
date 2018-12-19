import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { Http, Response, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  selectedEmployee : Employee;

  employees : Employee[];

  constructor(private http : Http) { }

  postEmployee(emp : Employee)
  {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});

    return this.http.post("http://localhost:58745/api/Employees",
                   body, requestOptions)
                  .pipe(map(x => x.json()));
}

putEmployee(emp : Employee, id: number)
{
  var body = JSON.stringify(emp);
  var headerOptions = new Headers({'Content-Type' : 'application/json'});
  var requestOptions = new RequestOptions({method : RequestMethod.Put, headers : headerOptions});

  return this.http.post("http://localhost:58745/api/Employees/" + id,
                 body, requestOptions)
                .pipe(map(x => x.json()));
}

getEmployees()
{
  this.http.get("http://localhost:58745/api/Employees")
              .pipe(map((data : Response) => data.json() as Employee[]))
              .toPromise().then((x) => {
                this.employees = x
              });
}

deleteEmployee(id : number)
{
  return this.http.delete("http://localhost:58745/api/Employees/" + id)
                  .pipe(map((data) => data.json()));
}
}
