<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'alamat',
        'telephone',
    ];
    public function buyings()
    {
        return $this->hasMany(Buying::class, 'pelangganid');
    }
}
