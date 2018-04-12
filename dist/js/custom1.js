//Edit poduct appending row
   $(document).ready(function(){
    var i = 1;
    $('.btn-append').click(function () {
           $(this).parents(".appendrow-wrapper").find("table tbody").children("tr:first-child")
           .find(".nodisplay").removeClass();
         $(this).parents(".appendrow-wrapper").find("table tbody").children("tr:first-child")
         .clone().appendTo($(this).parents(".row").parent(".appendrow-wrapper").find("table tbody"))
         .find("input,select").each(function() {
             $(this).val('').attr({
                'id': function(_, id) { return id + i },
                'name': function(_, name) { return name + i }              
              });
           });
           i++;
        });
        });

 $(document).on('click', '.btn-remove', function () {
    var len= $(this).parents(".appendrow-wrapper").find("table tbody tr").length;
    if(len > 1){
       $(this).parents("tr").remove();
    }
    else{
       $(this).parents(".appendrow-wrapper").find("table tbody tr:first-child").find("td:last-child").addClass("nodisplay");
    }
     
});


   //multi image upload

$(".multi-upload").click(function() {
  $("#multiimage").click();
});

   function previewImages() {

  var $preview = $('#preview').empty();
  if (this.files) $.each(this.files, readAndPreview);

  function readAndPreview(i, file) {
    
    if (!/\.(jpe?g|png|gif)$/i.test(file.name)){
      return alert(file.name +" is not an image");

    } // else...
    
    var reader = new FileReader();

    $(reader).on("load", function() {
      $preview.append($("<img/>", {src:this.result, height:100}));
    });

    reader.readAsDataURL(file);
    
  }

}

$('#multiimage').on("change", previewImages);
