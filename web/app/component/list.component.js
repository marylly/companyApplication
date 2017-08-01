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
var employee_service_1 = require("../service/employee.service");
var ListComponent = (function () {
    function ListComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    ListComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (employee) { return _this.employees = employee; }, function (error) { return console.log(error); });
    };
    ListComponent.prototype.editEmployee = function (employee) {
        var link = ['/form/edit', employee.emp_no];
        this.router.navigate(link);
    };
    ListComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employeeService.deleteData(id)
            .subscribe(function (res) {
            if (JSON.parse(res).success == 'success') {
                _this.infoMsg = 'Data siswa berhasil dihapus!';
                _this.getEmployees();
            }
            else {
                _this.errorMsg = 'Data siswa gagal dihapus!';
            }
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list-component',
            templateUrl: 'app/view/list.component.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map