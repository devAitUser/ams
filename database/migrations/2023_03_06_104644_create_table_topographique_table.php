<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableTopographiqueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_topographiques', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_rayonnages');
            $table->foreign('id_rayonnages')->references('id')->on('rayonnages')->onDelete('cascade');
            $table->string('cote_topographique');
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
        Schema::dropIfExists('table_topographique');
    }
}
