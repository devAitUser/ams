var check_parent = 'false';

 var all_dossiers = [];
 
 var type_btn = 'btn_dossier';

 function removeRow_table_champs_add_inventaire(e,row,id=null) {

  e.preventDefault();

  document.getElementById("row_table_champs_add_" + row).remove();




    $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
      }
     });

    $.ajax({
      url: APP_URL+"/delete_value_field",
      method:"POST",
      data:{
        items_delete : id
      },
      success:function(data){
  
        
  
    
    
  
      }
     })

  






}


function removeRow_table_champs_add(e,row,id=null) {

  e.preventDefault();

  document.getElementById("row_" + row).remove();




    $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
      }
     });

    $.ajax({
      url: APP_URL+"/delete_value_field_inventaire",
      method:"POST",
      data:{
        items_delete : row
      },
      success:function(data){
  
        
  
    
    
  
      }
     })

  






}




function unset_table() {

        $('#add_table_champs_add tr:not(:nth-child(-n+1))').remove();
        $(".block_attributs").addClass("hidden");

  }


  function type_champs(id,chosen) {

    if(chosen == "cote"){
       $('#input'+id).val(" Cote topographique ")
      
    }else {
      $('#input'+id).val("")
      
    }
   
    
  }







$(document).ready(function() {

  

        var id_get = 1;

        var tableLength = 1;
        var count = 1;


        var count_f = 1;


      
        

        


  

      
      $('.btn_add_oranigramme').on('click', function(event){
             event.preventDefault();
       

            count++;


        
            var add_row = '<tr id=row_table_champs_add_' + count + '  >';

      


            add_row += '<td><input id="input' + count + '" name="new_name_champ[]" class="form-control" type="text"   required></td>';

      
          

            add_row += '<td>  <select onChange="type_champs(' + count + ' ,this.options[this.selectedIndex].value)" name ="new_type_champ[]" class="form-control" id="" required> ';
            add_row += '  <option>sélectionner le type</option><option value="date">Date</option> <option value="Text">Text</option> <option value="cote"> Cote topographique </option>';
            add_row += '   </select></td>';
            add_row += '<td>  <div class="block_action_organigramme"> ';
            add_row += '<a href="" onClick="removeRow_table_champs_add_inventaire(event,' + count + ')" ><i class="fa-solid fa-circle-xmark "></i></a>';
            add_row += '      </div> </td></tr>';
          
                



            if (tableLength > 0) {

                $("#add_table_champs_add tbody tr:last").after(add_row);
            }
            if (tableLength == 0) {

                $("#add_table_champs_add tbody ").append(add_row);
            }
            tableLength++;



       });

     



});





