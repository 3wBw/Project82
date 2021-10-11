canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d"),

color = "red";
var last_position_of_x, last_position_of_y;
ctx.beginPath()
canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {

    mouseEvent="mouseDown"
}
  canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
    current_mouse_x = e.clientX-canvas.offsetLeft;
    current_mouse_y = e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown")  {
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_mouse_x, current_mouse_y);
    ctx.stroke();
    }
    last_position_of_x= current_mouse_x;
    last_position_of_y= current_mouse_y;
 }
   
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     mouseEvent="mouseUP";
 }
      
 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseEvent="mouseleave";
 }

function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    console.log("insideclearArea")
}