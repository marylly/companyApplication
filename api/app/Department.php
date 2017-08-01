<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'departments';
    protected $primaryKey = 'dept_no';
    protected $fillable = ['dept_no', 'dept_name'];
    public $incrementing = true;
    public $timestamps = false;
}
