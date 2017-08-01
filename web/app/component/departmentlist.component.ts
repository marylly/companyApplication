import { Department } from './../Department';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DepartmentService } from '../service/department.service';

@Component({
    selector: 'list-component',
    templateUrl: 'app/view/departmentlist.component.html'
})

export class DepartmentListComponent implements OnInit{
    departments : Department[];
    infoMsg : string;
    errorMsg : string;

    constructor(
        private departmentService : DepartmentService,
        private router : Router
    ){ }

    ngOnInit(){
        this.getDepartments();
    }

    getDepartments() : void{
        this.departmentService.getDepartments()
            .subscribe(
                department => this.departments = department,
                error => console.log(error)
            );
    }

    editDepartment(department : Department) : void{
        let link = ['/formDepartments/edit', department.dept_no];
        this.router.navigate(link);
    }

    deleteDepartment(id : number) : void{
        this.departmentService.deleteData(id)
            .subscribe(res => {
                if (JSON.parse(res).success == 'success') {
                    this.infoMsg = 'Registro deletado com sucesso!';
                    this.getDepartments();
                } else {
                    this.errorMsg = 'Não foi possível efetuar a operação!';
                }
            });
    }
}