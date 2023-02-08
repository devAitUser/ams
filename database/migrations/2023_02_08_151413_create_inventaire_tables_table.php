<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventaireTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventaire_tables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_inventaire');
            $table->foreign('id_inventaire')->references('id')->on('inventaires')->onDelete('cascade');
            $table->string('nom');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventaire_tables');
    }
}
