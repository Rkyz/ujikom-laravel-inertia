<?php

use App\Http\Controllers\BuyingController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/setting', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/setting', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/setting', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/product', [ProductController::class, 'index'])->name('product.index');
    Route::delete('/product/{id}', [ProductController::class, 'destroy'])->name('product.destroy')->middleware('admin');
    Route::get('/product/{id}', [ProductController::class, 'edit'])->name('product.edit')->middleware('admin');
    Route::patch('/product/{id}', [ProductController::class, 'update'])->name('product.update')->middleware('admin');
    Route::post('/product/create', [ProductController::class, 'store'])->name('product.store')->middleware('admin');
    Route::put('/product/stok/{id}', [ProductController::class, 'updateStok'])->name('product.updateStok')->middleware('admin');

    Route::get('/menus', [CategoryController::class, 'index'])->name('category.index');
    Route::post('/menus/category', [CategoryController::class, 'store'])->name('category.store')->middleware('admin');
    Route::put('/menus/{id}', [CategoryController::class, 'edit'])->name('category.edit')->middleware('admin');
    Route::delete('/menus/{id}', [CategoryController::class, 'destroy'])->name('category.destroy')->middleware('admin');
    
    Route::get('/menus/{category}', [ProductController::class, 'show'])->name('category.show');
    
    Route::get('/user', [UserController::class, 'index'])->name('user.index')->middleware('admin');
    Route::post('/user/create', [UserController::class, 'store'])->name('register')->middleware('admin');
    Route::delete('/user/{id}', [UserController::class, 'destroy'])->middleware('admin');
    Route::put('/user/{id}', [UserController::class, 'edit'])->middleware('admin');
    
    Route::post('/buying', [BuyingController::class, 'createBuying'])->name('buying.createBuying');
    Route::get('/history', [BuyingController::class, 'index'])->name('history.index');
    // Route::get('/history?id={id}', [BuyingController::class, 'byId'])->name('history.byId');
});

require __DIR__.'/auth.php';
