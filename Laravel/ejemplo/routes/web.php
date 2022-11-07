<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

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

/*
Route::get('/', function () {

    $data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return view('welcome', ['data' => $data]);
});
*/

Route::get('/{cadena?}', function ($cadena = null) {
    $resultado = 'No conectado';
    $user = User::first();

    switch ($cadena) {
        case 'hola-mundo':
            $resultado = 'Hola Usuario';
            break;

        case 'hola-laravel':
            $resultado = 'Hola Admin';
            break;

        default:
            $resultado = 'Perdona, no te he entendido.';
            break;
    }

    return view('welcome', ['cadena' => $resultado]);
});
