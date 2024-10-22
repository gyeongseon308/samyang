$(document).ready(function(){
    $(".box .gnb>li").mouseenter(function(){ 
        $(".menu").addClass("on");
    }); 
    $(".box .gnb>li").mouseleave(function(){ 
        $(".menu").removeClass("on");
    });

    $(".tab_menu>li").click(function(){
        let list = $(this).index();
        $(".conts_group>.tab_conts").stop().fadeOut();
        $(".conts_group>.tab_conts").eq(list).stop().fadeIn();
        
        $(".tab_menu>li").stop().removeClass("active"); 
        $(".tab_menu>li").eq(list).addClass("active");
    });
    $(".right").click(function(){
        $(".main_group").stop().animate({"margin-left":"-200%"},100,function(){
            $(".main_group>li:first-child").appendTo(".main_group");
            $(".main_group").css({"margin-left":"-100%"});
        });
    });
    $(".left").click(function(){
        $(".main_group").stop().animate({"margin-left":"0"},100,function(){
            $(".main_group>li:last-child").prependTo(".main_group");
            $(".main_group").css({"margin-left":"-100%"});
        });
    });
});