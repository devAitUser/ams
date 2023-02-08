<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFieldInventaireTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('field_inventaires', function (Blueprint $table) {
            $table->id();
            $table->string('nom_champs');
            $table->string('type_champs');
            $table->unsignedBigInteger('id_inventaire_tables');
            $table->foreign('id_inventaire_tables')->references('id')->on('inventaire_tables')->onDelete('cascade');
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
        Schema::dropIfExists('field_inventaire');
    }
}
