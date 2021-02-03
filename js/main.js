$(document).ready(function(){
    
    $(".hover_menu").hide();
    
    $(".h_left").click(function(){
        $(".hover_menu").stop().slideToggle(500);
    },function(){
        $(".hover_menu").stop().slideToggle(500);
    })
         
});