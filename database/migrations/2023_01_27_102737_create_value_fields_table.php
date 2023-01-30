<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateValueFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('value_fields', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->unsignedBigInteger('id_field_inventaire');
            $table->foreign('id_field_inventaire')->references('id')->on('field_table_inventaires')->onDelete('cascade');
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
        Schema::dropIfExists('value_fields');
    }
}
