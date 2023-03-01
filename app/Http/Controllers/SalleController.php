<?php

namespace App\Http\Controllers;
use App\Models\Salle;

use Illuminate\Http\Request;

class SalleController extends Controller
{
    public function index(){
      
        return view('salle.index');

    }
    public function all_Site(){

        $salle = Salle::all();  

    
        return  Response()
        ->json($salle);
        
    }
    public function store(Request $request){

                $new = new Salle();
                $new->site = $request->site;
                $new->ville = $request->ville;
                $new->save();

                return redirect(route("salle"));
    }
    public function delete(Request $request){

        $delete= Salle::find($request->items_delete);  
        $delete->delete();

        $data = Salle::all();  
   

        return  Response()
        ->json(['etat' => true , 'data' =>  $data    ]);
    
    }
}
