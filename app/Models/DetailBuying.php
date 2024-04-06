<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailBuying extends Model
{
    protected $table = 'detailbuying';

    protected $fillable = [
        'penjualanid',
        'productid',
        'jumlahproduct',
        'subtotal',
    ];

    public function buying()
    {
        return $this->belongsTo(Buying::class, 'penjualanid');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'productid');
    }
}
