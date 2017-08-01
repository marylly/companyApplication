<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;

class EmployeeController extends Controller
{
    public function index(){
        $request = Employee::all();
        return $request;
    }

    public function show($emp_no){
        $request = Employee::find($emp_no);
        return $request;
    }

    public function store(Request $req){
        $input = $req->only('first_name', 'last_name', 'gender');

        $query = Employee::create($input);
        if($query){
            $data['success'] = 'success';
            return $data;
        }else{
            $data['success'] = 'error';
            return $data;
        }
    }

    public function update(Request $req, $emp_no){
        $input = $req->all();
        $employee = Employee::where('emp_no', $emp_no);

        $query = $employee->update($input);
        if($query){
            $data['success'] = 'success';
            return $data;
        }else{
            $data['success'] = 'error';
            return $data;
        }
    }

    public function destroy(Request $req){
        $input = $req->only('id');
        $employee = Employee::find($input['id']);

        $query = $employee->delete();
        if($query){
            $data['success'] = 'success';
            return $data;
        }
    }
}
