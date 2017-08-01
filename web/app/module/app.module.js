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
var list_component_1 = require("../component/list.component");
var form_component_1 = require("../component/form.component");
var employee_service_1 = require("../service/employee.service");
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
                    { path: '', redirectTo: '/list', pathMatch: 'full' },
                    { path: 'list', component: list_component_1.ListComponent },
                    { path: 'form/:act', component: form_component_1.FormComponent },
                    { path: 'form/:act/:id', component: form_component_1.FormComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                form_component_1.FormComponent,
                list_component_1.ListComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [employee_service_1.EmployeeService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map