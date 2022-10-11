$(function(){

//    $(".logo li").mouseover(function(){


//     var index= $(this).index();
//     $(".souj").eq(index).stop().slideDown(500);
//    })
//    $(".logo li").mouseout(function(){


//     var index= $(this).index();
//     $(".souj").eq(index).stop().slideUp(500);
//    })
$(".logo li").hover(function(){

    var index=$(this).index();
    $(".souj").eq(index).stop().slideToggle(500);

})

})