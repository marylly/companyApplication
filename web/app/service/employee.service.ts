import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Employee } from '../Employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    employeeUrl : string = 'http://127.0.0.1:8000/api/v1/employees';
    tokenUrl : string = 'http://127.0.0.1:8000/get-token';

    constructor(
        private http : Http
    ){ }

    getEmployees() : Observable<Employee[]> {
        return this.http.get(this.employeeUrl)
            .map(res => <Employee[]> res.json());
    }

    getEmployee(id : any) : Observable<Employee> {
        let url = this.employeeUrl+'/'+id;
        return this.http.get(url)
            .map(res => <Employee> res.json());
    }

    getToken() : Observable<string> {
        return this.http.get(this.tokenUrl)
            .map(response => <string> response.json());
    }

    storeData(first_name : string, last_name : string, gender : string) : Observable<string> {
        let body = JSON.stringify({ first_name : first_name, last_name : last_name, gender : gender});
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers: headers});

        return this.http.post(this.employeeUrl, body, options)
            .map(res => (res.json()));
    }

    updateData(id : number, first_name : string, last_name : string, gender : string) : Observable<string> {
        let body = JSON.stringify({ first_name : first_name, last_name : last_name, gender : gender});
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers: headers});
        let url = this.employeeUrl+'/'+id;

        return this.http.post(url, body, options)
            .map(res => (res.json()));
    }

    deleteData(id : number) : Observable<string>{
        let body = JSON.stringify({ id : id });
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers : headers});
        let url = this.employeeUrl+'/delete';

        return this.http.post(url, body, options)
            .map(res => (res.json()));
    }
}
