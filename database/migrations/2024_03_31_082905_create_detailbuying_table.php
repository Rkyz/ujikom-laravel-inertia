<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detailbuying', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('penjualanid');
            $table->unsignedBigInteger('productid');
            $table->integer('jumlahproduct');
            $table->decimal('subtotal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detailbuying');
    }
};
