$(document).ready(function(){
	$(".filter-icon").click(function(){
       $(".filter-section").toggle("slow");
	});

});
/**************Add Product***************/   
// $(document).ready(function(){     
// $('.inventory').click(function() {
//   alert();
//     if( $(this).is(':checked')) {
//         $(".inventory-asset").toggle();
//         $(".buy-price").show();
//         $(".sell-price").show();
//         $(".cogs-account").show();
//         $(".sales-account").show();
//     } else {
//         $("#ProjectListButton").hide();
//     }
// });
// });
/**************Add Product***************/   
$(document).ready(function(){    
    $("body").on("click","#inventory",function(){
     if( $(this).is(':checked')) {
        $(".inventory-asset").show();
        $(".buy-price").show();
        $(".sell-price").show();
        $(".cogs-account").show();
        $(".sales-account").show();
        $('#buyingproduct').prop('checked', true);
        $('#sellingproduct').prop('checked', true);
    }
    else
    {
        $(".inventory-asset").hide();
        $(".buy-price").hide();
        $(".sell-price").hide();
        $(".cogs-account").hide();
        $(".sales-account").hide();
        $('#buyingproduct').prop('checked', false);
        $('#sellingproduct').prop('checked', false);
    }
    });

    $("body").on("click","#buyingproduct",function()
    {
      if( $(this).is(':checked')) 
      {
        $(".buy-price").show();
        $(".cogs-account").show();

      }
      else
      {
        $(".buy-price").hide();
        $(".cogs-account").hide();
      }
    }); 
    $("body").on("click","#sellingproduct",function()
    {
      if( $(this).is(':checked')) 
      {
        $(".sell-price").show();
        $(".sales-account").show();
      }
      else
      {
        $(".sell-price").hide();
        $(".sales-account").hide();
      }
    });
    // /* code for select all and delete*/

    $('#select-all').click(function() { 

    if(this.checked) { 
    $('.select_checkbox').each(function() { 
      this.checked = true; 
    });

    }
    else{
     $('.select_checkbox').each(function() {
      this.checked = false; 
      }); 
    }
    
    var count = $('.select_checkbox:checked').length;
    
    if(count!=0){
    $('.move-to-trash').show();
    }else{
    $('.move-to-trash').hide();
    }
    });
    //$('body').on('click','.custom-checkbox',function(){
    $(".select_checkbox").on('click',function(){ 
        if($('.select_checkbox:checked').length == $('.select_checkbox').length){
          $("#select-all").prop( "checked", true );
        }else{http://com360degree.com/dev2/AdminLTE-2.3.0/pages/change-password.html
          $("#select-all").prop( "checked", false );  
        }
    }); 
    $("td:checkbox").change(function(e){
      var numberOfChecked = $('.select_checkbox:checked').length;            
        if(numberOfChecked!=0){
          $('.move-to-trash').show();
        }else{
          $('.move-to-trash').hide();
        }
      }); 
  /* code for select all and delete ends*/
   
});
// $(function () {
//                 $('#startdate').datepicker({
//                 	autoclose: true
//                 });
//                 $('#enddate').datepicker({
//                 	autoclose: true
//                 });                
// });
/*******************Profile Image upload**********************/
$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }  
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $("#file-upload").click();
      });
});

/*************************Show/hide password**********************************/
$("#pwd-showhide").click(function(){
if($(this).is(':checked')) 
{
 $(".pwd").attr('type','text');
}
else
{
  $(".pwd").attr('type','password');
}
});
