var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
paintcanvas.style.backgroundColor = '#FFFFFF'

var isPainting = false;

function setWidth(value) {
 if (isNumeric(value)){
   paintcanvas.width = value;
 }
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    
    context.beginPath();
    
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

function isNumeric (value) {

  return !isNaN(value);
}

function setHeight(value){
  if(isNumeric(value)){
    paintcanvas.height = value;
  }
}

function startPaint(){
  isPainting = true;
}

function endPaint(){
  isPainting = false;
}

function doPaint(x, y){
  if(isPainting == true){
    paintCircle(x,y);
  }
}

function changeColor(newColor){
  color = newColor;
}

function resizeBrush(newSize){
  radius = newSize;
   document.getElementById("sizeOutput").value = newSize;
}

function background(newColor){
  paintcanvas.style.backgroundColor = newColor;
}

function changeColoreraser(){
  color = paintcanvas.style.backgroundColor;
}
function eraser(x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

function erase(x, y){
  if(isPainting == true){
    eraser(x,y);
  }
}