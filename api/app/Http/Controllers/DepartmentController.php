<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Department;

class DepartmentController extends Controller
{
    public function index(){
        $request = Department::all();
        return $request;
    }

    public function show($dept_no){
        $request = Department::find($dept_no);
        return $request;
    }

    public function store(Request $req){
        $input = $req->only('dept_name');
        $last_no = DB::table('departments')->orderBy('dept_no', 'desc')->first();
        $input['dept_no'] = (($last_no)? $last_no->dept_no: 0) + 1;
        $query = Department::create($input);
        if($query){
            $data['success'] = 'success';
            return $data;
        }else{
            $data['success'] = 'error';
            return $data;
        }
    }

    public function update(Request $req, $dept_no){
        $input = $req->all();
        $department = Department::where('dept_no', $dept_no);

        $query = $department->update($input);
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
        $department = Department::find($input['id']);

        $query = $department->delete();
        if($query){
            $data['success'] = 'success';
            return $data;
        }
    }
}
