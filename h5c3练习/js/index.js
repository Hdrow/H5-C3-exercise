$(function(){
    /*初始化fullpage插件*/
    $('.container').fullpage({
       
        verticalCentered:false,
       
        loopBottom:true,
     
        loopTop:true,
     
        afterLoad:function(link ,i ){
            
            $('.section').removeClass('now');
            setTimeout(function(){
                $('.section').eq(i-1).addClass('now');
            },200);
        }
    });
})
