import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Employee } from '../Employee';
import { EmployeeService } from '../service/employee.service';


@Component({
    selector: 'form-component',
    templateUrl: 'app/view/employeeform.component.html'
})

export class EmployeesFormComponent implements OnInit{
    title : String = '';
    employee : Employee;
    action : String;
    errorMsg : String;
    infoMsg : String;
    selectedId : number;

    constructor(
       private activeRoute : ActivatedRoute,
       private location : Location,
       private employeeService : EmployeeService
    ){ }

    ngOnInit(){
        this.activeRoute.params.forEach((param : Params) => {
            let act = param['act'];
            if(act == 'add'){
                this.title = 'Adicionar Funcionário';
                this.action = 'add';
            }else{
                let id = param.id;
                this.selectedId = id;
                this.title = 'Editar Funcionário';
                this.action = 'edit';
            }
        });

        if(this.action == 'edit') {
            this.getData(this.selectedId);
        }
    }

    getData(id : number) : void{
        this.employeeService.getEmployee(id)
            .subscribe(
                employees => this.employee = employees,
                error => console.log(error)
            );
    }

    goBack() : void{
        this.location.back();
    }

    addEmployee(first_name : string, last_name : string, gender : string) : void{
        first_name = first_name.trim();
        last_name = last_name.trim();
        gender = gender.trim();

        if(!first_name || !last_name || !gender){
            this.errorMsg = 'Verifique os dados preenchidos!';
            return;
        }
        this.employeeService.storeData(first_name, last_name, gender)
            .subscribe(
                res => {
                    this.errorMsg = '';

                    if(JSON.parse(res).success == 'success'){
                        this.infoMsg = 'Inclusão efetuada com sucesso!';
                    }
                });
    }

    editEmployee() : void{
        let first_name = this.employee.first_name;
        let last_name = this.employee.last_name;
        let gender = this.employee.gender;
        let id = this.employee.emp_no;

        if(!first_name || !last_name || !gender){
            this.errorMsg = 'Verifique os dados preenchidos!';
            return;
        }

        this.employeeService.updateData(id, first_name, last_name, gender)
            .subscribe(
                res => {
                    this.errorMsg = '';

                    if(JSON.parse(res).success == 'success'){
                        this.infoMsg = 'Atualização efetuada com sucesso!';
                    }
                });
    }
}