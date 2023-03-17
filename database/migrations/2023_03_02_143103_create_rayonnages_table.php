<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRayonnagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rayonnages', function (Blueprint $table) {
            $table->id();

            $table->string('n_r');

            $table->unsignedBigInteger('n_traves');

            $table->unsignedBigInteger('n_niveau');

            $table->unsignedBigInteger('n_conteneur');

            $table->unsignedBigInteger('n_boite');

            $table->unsignedBigInteger('id_salle');

            $table->foreign('id_salle')->references('id')->on('salles')->onDelete('cascade');

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
        Schema::dropIfExists('rayonnages');
    }
}
