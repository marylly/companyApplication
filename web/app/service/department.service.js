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
var DepartmentService = (function () {
    function DepartmentService(http) {
        this.http = http;
        this.departmentUrl = 'http://127.0.0.1:8081/api/v1/departments';
        this.tokenUrl = 'http://127.0.0.1:8081/get-token';
    }
    DepartmentService.prototype.getDepartments = function () {
        return this.http.get(this.departmentUrl)
            .map(function (res) { return res.json(); });
    };
    DepartmentService.prototype.getDepartment = function (id) {
        var url = this.departmentUrl + '/' + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    DepartmentService.prototype.getToken = function () {
        return this.http.get(this.tokenUrl)
            .map(function (response) { return response.json(); });
    };
    DepartmentService.prototype.storeData = function (dept_name) {
        var body = JSON.stringify({ dept_name: dept_name });
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.departmentUrl, body, options)
            .map(function (res) { return (res.json()); });
    };
    DepartmentService.prototype.updateData = function (id, dept_name) {
        var body = JSON.stringify({ dept_name: dept_name });
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.departmentUrl + '/' + id;
        return this.http.post(url, body, options)
            .map(function (res) { return (res.json()); });
    };
    DepartmentService.prototype.deleteData = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.departmentUrl + '/delete';
        return this.http.post(url, body, options)
            .map(function (res) { return (res.json()); });
    };
    DepartmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DepartmentService);
    return DepartmentService;
}());
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map