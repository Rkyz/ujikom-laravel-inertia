<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Product/Main',[
            'products' => Product::with('Category')->get(),
            'categories' =>  Category::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|unique:products',
            'price' => 'required',
            'stok' => 'required',
        ],[
            'name.required' => 'nama lu kosong goblok',
            'price.required' => 'price lu kosong goblok',
            'stok.required' => 'stok lu kosong goblok',
            'name.unique' => 'nama lu jan sama setan',
        ]);

            $product = new Product([
            'name' => $data['name'],
            'price' => $data['price'],
            'stok' => $data['stok'],
            'category_id' => $request->input('category_id'),
        ]);
    
        // Simpan produk
        $product->save();

        return redirect('/product')->with('message', 'Product Berhasil Disimpan');
    }

    public function updateStok(Request $request, $id)
    {
        $request->validate([
            'stok' => 'required|min:1', // Stok harus positif integer
        ],[
            'stok.required' => 'stok tidak boleh kosong',
            'stok.min' => 'stok tidak boleh 0'
        ]);
    
        $product = Product::findOrFail($id);
        $currentStok = $product->stok;
    
        $newStok = $currentStok + $request->stok;
        
        $product->update([
            'stok' => $newStok,
        ]);
    
        return redirect()->back()->with('message', 'Stok berhasil diperbarui');
    }
    
    
    public function edit($id)
    {
        return Inertia::render('Product/Edit', [
            'products' => Product::findOrFail($id),
            'categories' =>  Category::all()
        ]);
    }

    public function update(Request $request, $id)
    {
        $product = product::find($id);
        $data = $request->validate([
            'name' => 'required',
            'price' => 'required',
            'category_id' => '',
        ],[
            'name.required' => 'nama lu kosong goblok',
            'price.required' => 'price lu kosong goblok',
        ]);
    
        $product->update($data);
    
        return redirect('/product')->with('message', 'Product Berhasil Diupdate');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect('/product')->with('message', 'Product berhasil dihapus.');
    }

    public function show($category)
    {
       $category = Category::where('category', $category)->first();

       if (!$category) {
           abort(404, 'Kategori tidak ditemukan');
       }

       $products = $category->products;

       return Inertia::render('Menus/Menu', [
           'category' => $category,
           'products' => $products,
       ]);
    }
    
    
    
    

}
