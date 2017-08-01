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
var department_service_1 = require("../service/department.service");
var DepartmentFormComponent = (function () {
    function DepartmentFormComponent(activeRoute, location, departmentService) {
        this.activeRoute = activeRoute;
        this.location = location;
        this.departmentService = departmentService;
        this.title = '';
    }
    DepartmentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.forEach(function (param) {
            var act = param['act'];
            if (act == 'add') {
                _this.title = 'Adicionar Departmento';
                _this.action = 'add';
            }
            else {
                var id = param.id;
                _this.selectedId = id;
                _this.title = 'Editar Departmento';
                _this.action = 'edit';
            }
        });
        if (this.action == 'edit') {
            this.getData(this.selectedId);
        }
    };
    DepartmentFormComponent.prototype.getData = function (id) {
        var _this = this;
        this.departmentService.getDepartment(id)
            .subscribe(function (departments) { return _this.department = departments; }, function (error) { return console.log(error); });
    };
    DepartmentFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    DepartmentFormComponent.prototype.addDepartment = function (dept_name) {
        var _this = this;
        dept_name = dept_name.trim();
        if (!dept_name) {
            this.errorMsg = 'Verifique os dados preenchidos!';
            return;
        }
        this.departmentService.storeData(dept_name)
            .subscribe(function (res) {
            _this.errorMsg = '';
            if (JSON.parse(res).success == 'success') {
                _this.infoMsg = 'Inclusão efetuada com sucesso!';
            }
        });
    };
    DepartmentFormComponent.prototype.editDepartment = function () {
        var _this = this;
        var dept_name = this.department.dept_name;
        var id = this.department.dept_no;
        if (!name) {
            this.errorMsg = 'Verifique os dados preenchidos!';
            return;
        }
        this.departmentService.updateData(id, dept_name)
            .subscribe(function (res) {
            _this.errorMsg = '';
            if (JSON.parse(res).success == 'success') {
                _this.infoMsg = 'Atualização efetuada com sucesso!';
            }
        });
    };
    DepartmentFormComponent = __decorate([
        core_1.Component({
            selector: 'form-component',
            templateUrl: 'app/view/departmentform.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            department_service_1.DepartmentService])
    ], DepartmentFormComponent);
    return DepartmentFormComponent;
}());
exports.DepartmentFormComponent = DepartmentFormComponent;
//# sourceMappingURL=departmentform.component.js.map