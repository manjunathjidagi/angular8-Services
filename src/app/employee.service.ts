import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return(
      [
        { "id" : 1, "name" : "Hello World", "age" : "24" },
        { "id" : 2, "name" : "Heyyy Buddy", "age" : "26" },
        { "id" : 3, "name" : "Great Dude", "age" : "23" },
        { "id" : 4, "name" : "Nice Man", "age" : "27" }
      ]
    )
  }
}
