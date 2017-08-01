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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.employeeUrl = 'http://127.0.0.1:8000/api/v1/employees';
        this.tokenUrl = 'http://127.0.0.1:8000/get-token';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.employeeUrl)
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.getEmployee = function (id) {
        var url = this.employeeUrl + '/' + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.getToken = function () {
        return this.http.get(this.tokenUrl)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.storeData = function (first_name, last_name, gender) {
        var body = JSON.stringify({ first_name: first_name, last_name: last_name, gender: gender });
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.employeeUrl, body, options)
            .map(function (res) { return (res.json()); });
    };
    EmployeeService.prototype.updateData = function (id, first_name, last_name, gender) {
        var body = JSON.stringify({ first_name: first_name, last_name: last_name, gender: gender });
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.employeeUrl + '/' + id;
        return this.http.post(url, body, options)
            .map(function (res) { return (res.json()); });
    };
    EmployeeService.prototype.deleteData = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.employeeUrl + '/delete';
        return this.http.post(url, body, options)
            .map(function (res) { return (res.json()); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map