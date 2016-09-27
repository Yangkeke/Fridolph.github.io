$(function(){
  (function(){
    var anchor = (function(){
      $("#return_top").click(function(){
        $("html,body").animate({scrollTop:0}, 500);
      });
    })();
  })()
});