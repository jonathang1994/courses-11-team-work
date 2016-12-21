// store our global state here
var clicked = [];
var hoverElement;
var statusDiv = document.getElementById('status');

function getCentreOfElement(el) {
    var bounds = el.getBoundingClientRect();
    return {x:bounds.left + bounds.width/2,
            y:bounds.top + bounds.height/2};
}

function getNearestPointOutside(from, to, boxSize) {
    // which side does it hit?
    // get the angle of to from from.
    // triangle centre, w/2, h/2, same as 0,w,h.
    var theta = Math.atan2(boxSize.y, boxSize.x);
    var phi = Math.atan2(to.y - from.y, to.x - from.x);
    var nearestPoint = {};
    if(Math.abs(phi) < theta) { // crosses +x
        nearestPoint.x = from.x + boxSize.x/2.0;
        nearestPoint.y = from.y + ((to.x === from.x) ? from.y :
        ((to.y - from.y)/(to.x - from.x) * boxSize.x/2.0));
    } else if(Math.PI-Math.abs(phi) < theta) { // crosses -x
        nearestPoint.x = from.x - boxSize.x/2.0;
        nearestPoint.y = from.y + ((to.x === from.x) ? from.y :
        (-(to.y - from.y)/(to.x - from.x) * boxSize.x/2.0));
    } else if(to.y > from.y) { // crosses +y
        nearestPoint.y = from.y + boxSize.y/2.0;
        nearestPoint.x = from.x + ((to.y === from.y) ? 0 :
        ((to.x - from.x)/(to.y - from.y) * boxSize.y/2.0));
    } else { // crosses -y
        nearestPoint.y = from.y - boxSize.y/2.0;
        nearestPoint.x = from.x - ((to.y === from.y) ? 0 :
        ((to.x - from.x)/(to.y - from.y) * boxSize.y/2.0));
    }
    return nearestPoint;
}


var lineElem;
function drawLineXY(fromXY, toXY) {
    if(!lineElem) {
        lineElem = document.createElement('canvas');
        lineElem.style.position = "absolute";
        lineElem.style.zIndex = 10000;
        document.body.appendChild(lineElem);
    }
    var leftpoint, rightpoint;
    if(fromXY.x < toXY.x) {
      leftpoint = fromXY;
      rightpoint = toXY;
    } else {
      leftpoint = toXY;
      rightpoint = fromXY;
    }

    var lineWidthPix = 4;
    var gutterPix = 10;
    var origin = {x:leftpoint.x-gutterPix,
                  y:Math.min(fromXY.y, toXY.y)-gutterPix};
    lineElem.width = Math.max(rightpoint.x - leftpoint.x, lineWidthPix) +
      2.0*gutterPix;
    lineElem.height = Math.abs(fromXY.y - toXY.y) + 2.0*gutterPix;
    $( lineElem ).css({
      left: origin.x,
      top: origin.y
    });

    var ctx = lineElem.getContext('2d');
    // Use the identity matrix while clearing the canvas
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, lineElem.width, lineElem.height);
    ctx.restore();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#59C7D9';
    ctx.beginPath();
    ctx.moveTo(fromXY.x - origin.x, fromXY.y - origin.y);
    ctx.lineTo(toXY.x - origin.x, toXY.y - origin.y);
    ctx.stroke();
}

var movaDiv = document.getElementById('mova');
var movbDiv = document.getElementById('movb');
function moveHandler(evt) {
    var startCentre, startBounds;
    var movaBounds = movaDiv.getBoundingClientRect();
    var targets = [];
    if(clicked.length === 2) {
      targets = clicked;
    } else if(clicked.length === 1) {
      // targets.push(clicked[0]);
      // if(typeof hoverElement !== 'undefined') {
      //   // targets.push(hoverElement);
      // }
    }

    if(targets.length == 2) {
        startCentre = getCentreOfElement(targets[0]);
        startBounds = targets[0].getBoundingClientRect();
        var endCentre = getCentreOfElement(targets[1]);
        var endBounds = targets[1].getBoundingClientRect();
        var start = getNearestPointOutside(startCentre, endCentre,
                                           {x:startBounds.width,
                                            y:startBounds.height});
        var end = getNearestPointOutside(endCentre, startCentre,
                                         {x:endBounds.width,
                                          y:endBounds.height});
        drawLineXY(start, end);
        var movbBounds = movbDiv.getBoundingClientRect();
        $( movaDiv ).css({
          left: (start.x - movaBounds.width/2.0)+"px",
          top: (start.y - movaBounds.height/2.0)+"px"
        });
        $( movbDiv ).css({
          left: (end.x - movbBounds.width/2.0)+"px",
          top:(end.y - movbBounds.height/2.0)+"px"
        });

    } else if(targets.length == 1) {
        startCentre = getCentreOfElement(targets[0]);
        startBounds = targets[0].getBoundingClientRect();
        var startNearest = getNearestPointOutside(
          startCentre, {x:evt.clientX, y:evt.clientY},
          {x:startBounds.width, y:startBounds.height});
          $( movaDiv ).css({
            left: (startNearest.x - movaBounds.width/2.0)+"px",
            top: (startNearest.y - movaBounds.height/2.0)+"px"
          });
        drawLineXY(startNearest, {x:evt.clientX, y:evt.clientY});
    }
}

function clickHandler(evt) {
    if(clicked.length == 2) {
        clicked = [];
    }
    clicked.push(evt.target);
}
// function hoverOverHandler(evt) {
//   hoverElement = evt.target;
// }
//
// function hoverOutHandler(evt) {
//   hoverElement = undefined;
// }

var attachIds = ['brandingLeft', 'marketingRight', 'marketingLeft' , 'brandingRight'];
for(var ind = 0; ind < attachIds.length; ++ind) {
  var el = document.getElementById(attachIds[ind]);
  el.onclick = clickHandler;
  // el.onmouseover = hoverOverHandler;
  // el.onmouseout = hoverOutHandler;
}
window.onmousemove = moveHandler;

//
// $(function(){
//
//   $('#brandingLeft').on('click',function(){
//     // console.log("hello");
//     $('#marketingLeft p').removeClass().addClass('matching-button');
//     $('#marketingLeft p').removeClass().addClass('rectangle-locked');
//   });
//   $('#marketingLeft').on('click',function(){
//     // console.log("hello");
//     $('#marketingLeft p').removeClass().addClass('matching-button');
//     $('#brandingLeft p').removeClass().addClass('rectangle-locked');
//   });
//
//
// });
