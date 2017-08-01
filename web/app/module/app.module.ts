import { Employee }         from './../Employee';
import { NgModule } 		from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
//import component
import { AppComponent } 	from '../component/app.component';
import { EmployeesListComponent } 	from '../component/employeelist.component';
import { EmployeesFormComponent } 	from '../component/employeeform.component';
import { EmployeeService } from '../service/employee.service';

import { DepartmentListComponent } 	from '../component/departmentlist.component';
import { DepartmentFormComponent } 	from '../component/departmentform.component';
import { DepartmentService } from '../service/department.service';

@NgModule({
	imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/listEmployees', pathMatch: 'full'},
            {path: 'listEmployees', component: EmployeesListComponent},
            {path: 'formEmployees/:act', component: EmployeesFormComponent},
            {path: 'formEmployees/:act/:id', component: EmployeesFormComponent},
            {path: 'listDepartments', component: DepartmentListComponent},
            {path: 'formDepartments/:act', component: DepartmentFormComponent},
            {path: 'formDepartments/:act/:id', component: DepartmentFormComponent}
        ])
    ],
	declarations: [
	    AppComponent,
        EmployeesFormComponent,
        EmployeesListComponent,
        DepartmentFormComponent,
        DepartmentListComponent
    ],
	bootstrap: [ AppComponent ],
    providers: [ EmployeeService, DepartmentService ]
})

export class AppModule { }
