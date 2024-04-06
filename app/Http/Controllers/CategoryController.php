<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Menus/Food',[
            'categorys' =>  Category::withCount('products')->get()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'category' => 'required|unique:categories',
        ],[
            'category.required' => 'category lu jangan kosong goblok',
            'category.unique' => 'category lu jangan sama goblok',
        ]);

        Category::create($data);

        return redirect()->back()->with('message', 'Category Berhasil Disimpan');
    }


    public function edit(Request $request, $id)
    {
        $request->validate([
            'category' => 'required|unique:categories',
        ],[
            'category.required' => 'category lu jangan kosong goblok',
            'category.unique' => 'category lu jangan sama goblok',
        ]);
    
        $data = Category::findOrFail($id);
        $data->update([
            'category' => $request->category,
        ]);
    
        return redirect()->back()->with('message', 'Category Berhasil Diedit');
    }

    public function destroy($id)
    {
        $data = Category::findOrFail($id);
        $data->delete();

        return redirect()->back()->with('message', 'Category berhasil dihapus.');
    }

}
