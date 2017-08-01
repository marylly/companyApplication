<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return redirect('api/v1/employees');
});

Route::group(['middleware' => 'cors'], function(){
    Route::group(['prefix' => 'api/v1'], function(){
        Route::get('employees',         'EmployeeController@index');
        Route::get('employees/{emp_no}',    'EmployeeController@show');
        Route::post('employees',        'EmployeeController@store');
        Route::post('employees/delete', 'EmployeeController@destroy');
        Route::post('employees/{emp_no}',   'EmployeeController@update');
    });
});

