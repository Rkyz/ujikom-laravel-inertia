<?php

namespace App\Http\Controllers;

use App\Models\Buying;
use App\Models\category;
use App\Models\customer;
use App\Models\DetailBuying;
use App\Models\product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BuyingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $buyings = Buying::with('customer', 'details.product')->get();
        
        $mergedBuyings = [];
    
        foreach ($buyings as $buying) {
            $customerId = $buying->customer->id;
    
            if (!isset($mergedBuyings[$customerId])) {
                $mergedBuyings[$customerId] = $buying;
            } else {
                $mergedDetails = array_merge($mergedBuyings[$customerId]->details->toArray(), $buying->details->toArray());
                $mergedBuyings[$customerId]->details = collect($mergedDetails);
            }
        }
    
        return Inertia::render('History/Main', [
            'buying' => $mergedBuyings,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Buying $buying)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Buying $buying)
    {
        //
    }

    public function createBuying(Request $request)
    {
        $request->validate([
            'tanggalpenjualan' => 'required|date',
            'customer.nama' => 'required|string',
            'customer.alamat' => 'required|string', 
            'customer.telephone' => 'required|string',
            'details' => 'required|array',
            'details.*.productid' => 'required|exists:products,id',
            'details.*.jumlahproduct' => 'required|integer|min:1', 
        ]);
        
    
        $errors = [];
        foreach ($request->input('details') as $detail) {
            $product = Product::findOrFail($detail['productid']);
            if ($detail['jumlahproduct'] > $product->stok) {
                $errors[] = "Stok produk {$product->name} tidak mencukupi";
            }
        }
    
        if (!empty($errors)) {
             return redirect()->back()->with('message', $errors);
        }
    
        // $customer = Customer::where('telephone', $request->input('pelanggan.telephone'))->first();
        $customer = Customer::where('nama', $request->input('customer.nama'))
        ->where('alamat', $request->input('customer.alamat'))
        ->where('telephone', $request->input('customer.telephone'))
        ->first();
        
        if (!$customer) {
            $customer = new Customer();
            $customer->nama = $request->input('customer.nama');
            $customer->alamat = $request->input('customer.alamat');
            $customer->telephone = $request->input('customer.telephone');
            $customer->save();
        }
    
        $buying = Buying::where('pelangganid', $customer->id)->first();

        if (!$buying) {
            $buying = new Buying();
            $buying->TanggalPenjualan = $request->input('tanggalpenjualan');
            $buying->totalprice = 0;
            $buying->pelangganid = $customer->id;
            $buying->save();
        }

        $totalprice = $buying->totalprice;
    
        foreach ($request->input('details') as $detail) {
            $product = Product::findOrFail($detail['productid']);
            $subtotal = $product->price * $detail['jumlahproduct'];
            $totalprice += $subtotal;
    
            $detailBuying = new DetailBuying();
            $detailBuying->penjualanid = $buying->id;
            $detailBuying->productid = $detail['productid'];
            $detailBuying->jumlahproduct = $detail['jumlahproduct'];
            $detailBuying->subtotal = $subtotal; 
            $detailBuying->save();
    
            $product->stok -= $detail['jumlahproduct'];
            $product->save();
        }
    
        $buying->totalprice = $totalprice;
        $buying->save();
    
        return redirect('/menus')->with('message', 'Pembelian berhasil ditambahkan');

        // $request->validate([
        //     'nama' => 'required|string',
        //     'alamat' => 'required|string',
        //     'telephone' => 'required|string|unique:customers,telephone',
        // ]);        

        // // Buat pelanggan baru
        // $customer = new Customer();
        // $customer->nama = $request->nama;
        // $customer->alamat = $request->alamat;
        // $customer->telephone = $request->telephone;
        // $customer->save();
    }
    
}
