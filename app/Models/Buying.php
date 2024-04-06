<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buying extends Model
{
    use HasFactory;

    protected $fillable = [
        'tanggalpenjualan',
        'totalprice',
        'pelangganid',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'pelangganid');
    }

    public function details()
    {
        return $this->hasMany(DetailBuying::class, 'penjualanid');
    }
}
