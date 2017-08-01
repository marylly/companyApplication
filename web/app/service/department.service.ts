import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Department } from '../Department';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DepartmentService {
    departmentUrl : string = 'http://127.0.0.1:8081/api/v1/departments';
    tokenUrl : string = 'http://127.0.0.1:8081/get-token';

    constructor(
        private http : Http
    ){ }

    getDepartments() : Observable<Department[]> {
        return this.http.get(this.departmentUrl)
            .map(res => <Department[]> res.json());
    }

    getDepartment(id : any) : Observable<Department> {
        let url = this.departmentUrl+'/'+id;
        return this.http.get(url)
            .map(res => <Department> res.json());
    }

    getToken() : Observable<string> {
        return this.http.get(this.tokenUrl)
            .map(response => <string> response.json());
    }

    storeData(dept_name : string) : Observable<string> {
        let body = JSON.stringify({ dept_name : dept_name});
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers: headers});

        return this.http.post(this.departmentUrl, body, options)
            .map(res => (res.json()));
    }

    updateData(id : number, dept_name : string) : Observable<string> {
        let body = JSON.stringify({ dept_name : dept_name});
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers: headers});
        let url = this.departmentUrl+'/'+id;

        return this.http.post(url, body, options)
            .map(res => (res.json()));
    }

    deleteData(id : number) : Observable<string>{
        let body = JSON.stringify({ id : id });
        let headers = new Headers({'content-type' : 'application/json'});
        let options = new RequestOptions({ headers : headers});
        let url = this.departmentUrl+'/delete';

        return this.http.post(url, body, options)
            .map(res => (res.json()));
    }
}
