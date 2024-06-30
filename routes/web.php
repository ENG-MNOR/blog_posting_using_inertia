<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[PostController::class,'index']);
Route::delete('/post/{post}',[PostController::class,'destroy']);
Route::resource('/posts',PostController::class)->except('index','destroy');