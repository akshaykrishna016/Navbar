$(document).ready(()=>{
    $("#searchbar").trigger("focus")

    $("input").focusin(function(){
        $(this).addClass("colortofocus")
        })
    $("input").focusout(function(){

        $(this).removeClass("colortofocus")

    });
    $( "#searchbtn" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
})


})

