<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employees';
    protected $primaryKey = 'emp_no';
    protected $fillable = ['emp_no','first_name', 'last_name', 'gender','birth_date','hire_date'];
    public $incrementing = true;
    public $timestamps = false;
}
