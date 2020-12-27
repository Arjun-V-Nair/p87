var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("loki.jpg", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Shift + P are pressed together to increase block size");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Shift + M are pressed together to decrease block size");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

if (keyPressed=='38') {
    up();
    console.log("⬆");
}
if (keyPressed=='40') {
   down();
   console.log("⬇");
}
if (keyPressed=='37') {
   left();
   console.log("⬅");
}
if (keyPressed=='39') {
   right();
   console.log("➡");
}
if (keyPressed=='65') {
   new_image("captain_america_left_hand.png");
   console.log("A to place captain america's left hand");
}
if (keyPressed=='66') {
   new_image("spiderman_face.png");
   console.log("B to place spiderman's face");
}
if (keyPressed=='67') {
   new_image("hulk_face.png");
   console.log("C to place Hulk's face");
}
if (keyPressed=='68') {
   new_image("thor_face.png");
   console.log("D to place thor's face");
}
if (keyPressed=='69') {
new_image("ironman_face.png");
console.log("E to place ironman's face");
}
if (keyPressed=='70') {
new_image("spiderman_body.png");
console.log("F to place spiderman's's body");
}
if (keyPressed=='71') {
new_image("ironman_body.png");
console.log("G to place ironman's body");
}
if (keyPressed=='72') {
new_image("hulkd_body.png");
console.log("H to place hulk's body");
}
if (keyPressed=='73') {
new_image("hulk_left_hand.png");
console.log("I to place hulk's left hand");
}
if (keyPressed=='74') {
new_image("thor_left_hand.png");
console.log("J to place thor's left hand");
}
if (keyPressed=='75') {
new_image("spiderman_left_hand.png");
console.log("K to place spiderman's left hand");
}
if (keyPressed=='76') {
new_image("ironman_left_hand.png");
console.log("L to place ironman's left hand");
}
if (keyPressed=='89') {
new_image("thor_right_hand.png");
console.log("Y to place thor's right hand");
}
if (keyPressed=='78') {
new_image("hulk_right_hand.png");
console.log("N to place hulk's right hand");
}
if (keyPressed=='79') {
new_image("spiderman_right_hand.png");
console.log("O to place spiderman's right hand");
}
if (keyPressed=='90') {
new_image("ironman_right_hand.png");
console.log("Z to place ironman's right hand");
}
if (keyPressed=='81') {
new_image("spiderman_legs.png");
console.log("Q to place spiderman's legs");
}
if (keyPressed=='82') {
new_image("ironman_legs.png.png");
console.log("R to place ironman's legs");
}
if (keyPressed=='83') {
new_image("hulk_legs.png");
console.log("S to place hulk's legs");
}
}
function up() {
if (player_y>=0)
{
   player_y=player_y-block_image_height;
   console.log("block_image_height="+block_image_height);
   console.log("when up arrow is pressed"+player_y);
canvas.remove(player_object);
player_update();
}  
}
function down() {
 if (player_y<=500)
 {
     player_y=player_y+block_image_height;
     console.log("block_image_height="+block_image_height);
     console.log("when down arrow arrow is pressed"+player_y);
canvas.remove(player_object);
player_update();
 }  
}
function left() {
 if (player_x>0)
 {
     player_x=player_x-block_image_width;
     console.log("block_image_width="+block_image_width);
     console.log("when left arrow is pressed"+player_x);
canvas.remove(player_object);
player_update();
 }  
}
function right() {
 if (player_x<=850)
 {
     player_x=player_x+block_image_width;
     console.log("block_image_width="+block_image_width);
     console.log("when right arrow is pressed"+player_x);
canvas.remove(player_object);
player_update();
 }  
}