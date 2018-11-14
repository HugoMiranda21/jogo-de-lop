 var img;
 var char;
 var x=100;
 var y=100;

function preload(){
  img=loadImage("imagem/background.png");
  char=loadImage("imagem/Mage.png");
}
function setup(){
  createCanvas(800, 400);
}
function draw(){
  background(img);
if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

  
  rect(x, y, 50, 50);
 
  

}