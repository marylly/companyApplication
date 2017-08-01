"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var employee_service_1 = require("../service/employee.service");
var FormComponent = (function () {
    function FormComponent(activeRoute, location, employeeService) {
        this.activeRoute = activeRoute;
        this.location = location;
        this.employeeService = employeeService;
        this.title = '';
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.forEach(function (param) {
            var act = param['act'];
            if (act == 'add') {
                _this.title = 'Adicionar Funcionário';
                _this.action = 'add';
            }
            else {
                var id = param['emp_no'];
                _this.selectedId = id;
                _this.title = 'Editar Funcionário';
                _this.action = 'edit';
            }
        });
        if (this.action == 'edit') {
            this.getData(this.selectedId);
        }
    };
    FormComponent.prototype.getData = function (id) {
        var _this = this;
        this.employeeService.getEmployee(id)
            .subscribe(function (employees) { return _this.employee = employees; }, function (error) { return console.log(error); });
    };
    FormComponent.prototype.goBack = function () {
        this.location.back();
    };
    FormComponent.prototype.addEmployee = function (first_name, last_name, gender) {
        var _this = this;
        first_name = first_name.trim();
        last_name = last_name.trim();
        gender = gender.trim();
        if (!first_name || !last_name || !gender) {
            this.errorMsg = 'Ada field yang belum terisi!';
            return;
        }
        this.employeeService.storeData(first_name, last_name, gender)
            .subscribe(function (res) {
            _this.errorMsg = '';
            if (JSON.parse(res).success == 'success') {
                _this.infoMsg = 'Inclusão efetuada com sucesso!';
            }
        });
    };
    FormComponent.prototype.editEmployee = function () {
        var _this = this;
        var first_name = this.employee.first_name;
        var last_name = this.employee.last_name;
        var gender = this.employee.gender;
        var id = this.employee.emp_no;
        if (!first_name || !last_name || !gender) {
            this.errorMsg = 'Ada field yang belum terisi!';
            return;
        }
        this.employeeService.updateData(id, first_name, last_name, gender)
            .subscribe(function (res) {
            _this.errorMsg = '';
            if (JSON.parse(res).success == 'success') {
                _this.infoMsg = 'Update data murid berhasil!';
            }
        });
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form-component',
            templateUrl: 'app/view/form.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            employee_service_1.EmployeeService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map