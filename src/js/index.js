// es5 area
$(document).ready(function(){

  var s = Snap("#svgwrap");
  var bigCircle = s.circle(150, 150, 100);
  bigCircle.attr({
    stroke: "#000",
    strokeWidth: 5
  });
  var p = s.path("M110,95,95,110M115,100,100,115").attr({
    fill: "none",
    stroke: "#bada55",
    strokeWidth: 4
  });
  var ptrn = p.pattern(100, 100, 10, 10);
  bigCircle.attr({
      fill: ptrn
  });
  p.animate({strokeWidth: 1, stroke: "#FF4136"}, 1000);

    //Lets create a masking circle
  var ring = s.circle(150, 150, 92).attr({
    fill: "none",
    stroke: "#fff",
    strokeWidth: 10
  });
  s.rect(0, 150, 300, 30).attr({fill: "#85144B"}).insertBefore(bigCircle);

  bigCircle.attr({
    mask: ring
  });


});/* end document */