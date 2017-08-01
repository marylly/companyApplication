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
var router_1 = require("@angular/router");
var department_service_1 = require("../service/department.service");
var DepartmentListComponent = (function () {
    function DepartmentListComponent(departmentService, router) {
        this.departmentService = departmentService;
        this.router = router;
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    DepartmentListComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getDepartments()
            .subscribe(function (department) { return _this.departments = department; }, function (error) { return console.log(error); });
    };
    DepartmentListComponent.prototype.editDepartment = function (department) {
        var link = ['/formDepartments/edit', department.dept_no];
        this.router.navigate(link);
    };
    DepartmentListComponent.prototype.deleteDepartment = function (id) {
        var _this = this;
        this.departmentService.deleteData(id)
            .subscribe(function (res) {
            if (JSON.parse(res).success == 'success') {
                _this.infoMsg = 'Registro deletado com sucesso!';
                _this.getDepartments();
            }
            else {
                _this.errorMsg = 'Não foi possível efetuar a operação!';
            }
        });
    };
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'list-component',
            templateUrl: 'app/view/departmentlist.component.html'
        }),
        __metadata("design:paramtypes", [department_service_1.DepartmentService,
            router_1.Router])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=departmentlist.component.js.map