import { Employee } from './../Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../service/employee.service';

@Component({
    selector: 'list-component',
    templateUrl: 'app/view/employeelist.component.html'
})

export class EmployeesListComponent implements OnInit{
    employees : Employee[];
    infoMsg : string;
    errorMsg : string;

    constructor(
        private employeeService : EmployeeService,
        private router : Router
    ){ }

    ngOnInit(){
        this.getEmployees();
    }

    getEmployees() : void{
        this.employeeService.getEmployees()
            .subscribe(
                employee => this.employees = employee,
                error => console.log(error)
            );
    }

    editEmployee(employee : Employee) : void{
        let link = ['/formEmployees/edit', employee.emp_no];
        this.router.navigate(link);
    }

    deleteEmployee(id : number) : void{
        this.employeeService.deleteData(id)
            .subscribe(res => {
                if (JSON.parse(res).success == 'success') {
                    this.infoMsg = 'Registro apagado com sucesso!';
                    this.getEmployees();
                } else {
                    this.errorMsg = 'Não foi possível efetuar a operação!';
                }
            });
    }
}