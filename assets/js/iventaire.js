var check_parent = 'false';

 var all_dossiers = [];
 
 var type_btn = 'btn_dossier';




 function removeRow_table_champs_add(e,row,id=null) {

  e.preventDefault();

  document.getElementById("row_" + row).remove();




    $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
      }
     });

    $.ajax({
      url: APP_URL+"/delete_value_field",
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







$(document).ready(function() {

  

        var id_get = 1;

        var tableLength = 1;
        var count = 1;


        var count_f = 1;



        $('#field_form').on('submit', function(event){

          
          event.preventDefault();
          
          $.ajaxSetup({
            headers: {
              'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
            }
          });
          
            $.ajax({
             url:APP_URL+"/store_inventaire_table",
             method:"POST",
             data:$(this).serialize(),
             success:function(data){


              var add_row = '<tr>';
            
              

              for (i = 0; i < data.champs.length; i++) { 

                   add_row += '<td>' + data.champs[i] + '      </td>';

              }
         
              add_row += '<td><a href="" class="prevent-default" onClick="removeRow(event,1)" ><i class="fa-solid fa-circle-xmark text-danger text-19  font-weight-700 btn_close"></i></a></td></tr>';
              $("#table tbody").append(add_row);
        
              $("#btn_F").click();
           
   
              
       
             }
            })
         });

        


        $(".btn_valide_f").click(function(e) {


          e.preventDefault();


          
  
          var check_input_validate = true;

          
  
          var input_diplome = $("#diplome_f").val();
          var input_specialites = $("#intitule").val();
          var input_option = $("#input_option").val();
          var input_annee_obtention = $("#datepicker_obtention").val();
  
          var date_naissance = $("#date_naissance").val();
  
  
          var start = new Date(date_naissance);
          var year_user = start.getFullYear();
  
          var cal_year = input_annee_obtention - year_user;
  
         

                          var add_row = '<tr id=row_f' + count_f + '><td> <input type="hidden" name="f_diplome[]" value="' + input_diplome + '" > ' + input_diplome + ' ';
  
  
                          add_row += '</td>';
  
  
                          add_row += '<td> <input type="hidden" name="f_specialites[]" value="' + input_specialites + '" >   '  + input_specialites + '</td>';
                          add_row += '<td> <input type="hidden" name="f_option[]" value="' + input_option + '" >  ' + input_option + '</td>';
                          add_row += '<td> <input type="hidden" name="f_annee_obtention[]" value="' + input_annee_obtention + '" > ' + input_annee_obtention + '</td>';
                          add_row += '<td><a href="" class="prevent-default" onClick="removeRow_f(event,' + count_f + ')" ><i class="fa-solid fa-circle-xmark text-danger text-19  font-weight-700 btn_close"></i></a></td></tr>';
  
  
  

                          $("#table_formation tbody").append(add_row);
  
                          count_f++;
                          tableLength_f++;

  
                          $("#btn_F").click();
  
                          $("#option").val('');
                          $("#datepicker_obtention").val('');
  
      });

      
      $('.btn_add_oranigramme').on('click', function(event){
             event.preventDefault();
       

            count++;


        
            var add_row = '<tr id=row_table_champs_add_' + count + '  >';

      


            add_row += '<td><input name="new_name_champ[]" class="form-control" type="text"   required></td>';

      
          

            add_row += '<td>  <select name ="new_type_champ[]" class="form-control" id="" required> ';
            add_row += '  <option>sélectionner le type</option><option value="date">Date</option> <option value="Text">Text</option> ';
            add_row += '   </select></td>';
            add_row += '<td>  <div class="block_action_organigramme"> ';
            add_row += '<a href="" onClick="removeRow_table_champs_add(event,' + count + ')" ><i class="fa-solid fa-circle-xmark "></i></a>';
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





