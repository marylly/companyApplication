"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import component
var app_component_1 = require("../component/app.component");
var employeelist_component_1 = require("../component/employeelist.component");
var employeeform_component_1 = require("../component/employeeform.component");
var employee_service_1 = require("../service/employee.service");
var departmentlist_component_1 = require("../component/departmentlist.component");
var departmentform_component_1 = require("../component/departmentform.component");
var department_service_1 = require("../service/department.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/listEmployees', pathMatch: 'full' },
                    { path: 'listEmployees', component: employeelist_component_1.EmployeesListComponent },
                    { path: 'formEmployees/:act', component: employeeform_component_1.EmployeesFormComponent },
                    { path: 'formEmployees/:act/:id', component: employeeform_component_1.EmployeesFormComponent },
                    { path: 'listDepartments', component: departmentlist_component_1.DepartmentListComponent },
                    { path: 'formDepartments/:act', component: departmentform_component_1.DepartmentFormComponent },
                    { path: 'formDepartments/:act/:id', component: departmentform_component_1.DepartmentFormComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                employeeform_component_1.EmployeesFormComponent,
                employeelist_component_1.EmployeesListComponent,
                departmentform_component_1.DepartmentFormComponent,
                departmentlist_component_1.DepartmentListComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [employee_service_1.EmployeeService, department_service_1.DepartmentService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map