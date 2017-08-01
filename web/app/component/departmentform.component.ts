import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Department } from '../Department';
import { DepartmentService } from '../service/department.service';


@Component({
    selector: 'form-component',
    templateUrl: 'app/view/departmentform.component.html'
})

export class DepartmentFormComponent implements OnInit{
    title : String = '';
    department : Department;
    action : String;
    errorMsg : String;
    infoMsg : String;
    selectedId : number;

    constructor(
       private activeRoute : ActivatedRoute,
       private location : Location,
       private departmentService : DepartmentService
    ){ }

    ngOnInit(){
        this.activeRoute.params.forEach((param : Params) => {
            let act = param['act'];
            if(act == 'add'){
                this.title = 'Adicionar Departmento';
                this.action = 'add';
            }else{
                let id = param.id;
                this.selectedId = id;
                this.title = 'Editar Departmento';
                this.action = 'edit';
            }
        });

        if(this.action == 'edit') {
            this.getData(this.selectedId);
        }
    }

    getData(id : number) : void{
        this.departmentService.getDepartment(id)
            .subscribe(
                departments => this.department = departments,
                error => console.log(error)
            );
    }

    goBack() : void{
        this.location.back();
    }

    addDepartment(dept_name : string) : void{
        dept_name = dept_name.trim();

        if(!dept_name){
            this.errorMsg = 'Verifique os dados preenchidos!';
            return;
        }
        this.departmentService.storeData(dept_name)
            .subscribe(
                res => {
                    this.errorMsg = '';

                    if(JSON.parse(res).success == 'success'){
                        this.infoMsg = 'Inclusão efetuada com sucesso!';
                    }
                });
    }

    editDepartment() : void{
        let dept_name = this.department.dept_name;
        let id = this.department.dept_no;

        if(!name){
            this.errorMsg = 'Verifique os dados preenchidos!';
            return;
        }

        this.departmentService.updateData(id, dept_name)
            .subscribe(
                res => {
                    this.errorMsg = '';

                    if(JSON.parse(res).success == 'success'){
                        this.infoMsg = 'Atualização efetuada com sucesso!';
                    }
                });
    }
}