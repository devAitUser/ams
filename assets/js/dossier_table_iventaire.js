



  function click_show(e,row) {
             
    e.preventDefault();
    var id =row

    var url =APP_URL+'/url_dossier/' + row ;

    window.open(url,'_blank');




}

  function fill_table(){






    var button_show   = '  <svg width="26px" height="26px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>folder--details</title><rect x="16" y="20" width="14" height="2"/><rect x="16" y="24" width="14" height="2"/><rect x="16" y="28" width="7" height="2"/><path d="M14,26H4V6h7.17l3.42,3.41.58.59H28v8h2V10a2,2,0,0,0-2-2H16L12.59,4.59A2,2,0,0,0,11.17,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H14Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>';


 


  
    $('#table').DataTable( {
      dom: 'Bfrtip',
      buttons: [
       
        {
          extend: 'excel',
          title: "l'inventaire",
          exportOptions: {
            columns: [ 0, 1, 2,3,4]
          },
        },
        {
          extend: 'pdf',
          title: "l'inventaire",
          exportOptions: {
            columns: [ 0, 1, 2,3,4]
          },
        }
      ]
  });

}


$(document).ready(function() {
     
    fill_table();
  

 } );