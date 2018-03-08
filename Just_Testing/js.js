$(window).ready(function() {
  var movementStrength = 42;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
    $(window).mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -3 - 0;
              var newvalueY = height * pageY * -3- 50;
        
              document.getElementById("bg1").style.transform = "translate("+newvalueX+"px,"+newvalueY+"px)";
              document.getElementById("bg2").style.transform = "translate("+newvalueX+"px,"+newvalueY+"px)";
    });
  });