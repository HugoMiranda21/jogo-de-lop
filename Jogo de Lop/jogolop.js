 var img;
 var char;
 var x, y;
 var disparo = false;
 var xd, yd;
 var fireball;
var qtorcs=30;
var orcx=[];
var movorcs = [];
var pontos = 0;
var score = 0;
var goblin =[];
var contframe = 0;
var ganima;
var colisao = true;
var vel = 1;
var level = 1;
var barreira = 5000;
var qtotal = 100;
var powercont = 0;
var power = false;
var xp, yp;
var textpower = false;
var powerimg;
var Tela = 0;
var xs = [];
var ys = [];
var soundfb;
var eff = true;
var soundpower;
var expo = true;
var bestscore = 0;
var font;




function preload(){
  img=loadImage("imagem/background5.png");
  char=loadImage("imagem/Mage3.png");
  fireball=loadImage("imagem/fireballt.png");
  for(i=0; i<20; i++ ){
  goblin[i] = loadImage("imagem/Goblin"+i+".png");
         }
  powerimg = loadImage("imagem/power.png");
 soundfb = loadSound("imagem/fireball.mp3");
 soundpower = loadSound("imagem/POWER.mp3");
font = loadFont("imagem/Ancient.ttf");

}
function setup(){
  frameRate(30);
  createCanvas(700, 650);
  x = 100;
  xd = x;
  xp= x;

  y = 589;
  yd = y;
  yp=y;
 for( i=0; i<qtotal; i++){
  orcx[i]= 2* random(50,450);
  movorcs[i]= 5* (-random(0, 200));
  xs[i] = random(50,450);
  ys[i] = (-random(0, 200));
 }
}


function draw(){

if( Tela === 0){

 textFont(font);
  background(img);
  textSize(37);
  text("CONTEMPLEM O MAGO", 15, 380);
  textSize(25);
  text("seta pra cima para jogar", 50, 440);
  textSize(18);
  fill(255);
  text("o exercito goblinoide esta atacando o reino de Valkaria", 13, 150);
  text("Voce como poderoso mago, chegou ate eles e gritou:", 13, 180);
  text("VOCES NAO PASSARAO", 13, 210);
  text("Agora seu dever e vencer toda a orda de Goblins", 13, 240);
  text(" sem deixar nenhum passar", 13, 270);
  text("PARA QUE TODOS", 13, 310);
  text("seta direita e esquerda para se mover", 13, 460);
  text("control para atirar suas fireballs", 13,  480);
  text("Quando contador de poder for = 20, contemple o mago", 13, 500);
  text(" Seta pra cima quando for a hora de contemplar o mago", 13, 520);

  if(keyIsDown (UP_ARROW)){
    Tela = 1;
    for( i=0; i<qtotal; i++){
  orcx[i]= random(50,450);
  movorcs[i]= 5* (-random(0, 200));
 }
}
  }
if(Tela === 1){
if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;
  if(keyIsDown(CONTROL) && (! disparo) ){
     disparo = true;
      xd = x+5;
      yd = y;
  }
  
  background(img);
  textSize(32);
  image(char, x, y);
  if(disparo){
    image(fireball, xd, yd);
  }
   //criação e movimentação dos orcs
    ganima = goblin[contframe]
    contframe++
     for(i=0; i<qtorcs; i++){
    
 image(ganima, orcx[i], movorcs[i]);
    movorcs[i] = movorcs[i] + vel;
    if(movorcs[i] > y-40){
       orcx[i] = random(50, 450);
       movorcs[i] = 5* (-random(0, 300));
      
    }
    else if( orcx[i] >-900 && movorcs[i] > 548){
      Tela = 2;
      if(pontos > bestscore){
      bestscore = pontos;
    }
  }
}
  if(contframe>19){
    contframe = 0;
  }

   if(disparo){
     yd = yd - 35; 
      if(eff){
      soundfb.play();
      eff = false;
  }

       for(i=0; i<qtorcs; i++){
        if( xd >=orcx[i] -25 && xd<=orcx[i] + 25 && yd <= movorcs[i] + 30){
           pontos = pontos + 100;
           orcx[i] = -900;
           disparo = false;
           powercont ++;
           eff = true;
         }
         else if( yd <=-20){
          disparo = false;
          eff = true;

         }
       }
    }
    if(powercont%20===0 && powercont!==0){
      textpower = true;
      power = false;
}


    if( keyIsDown(UP_ARROW) && (! power) && (textpower)){

           power = true;
           powercont = 0;
           textpower = false;
           xp = x-80;
           }

    
    if(power){
      if(expo){
      soundpower.play(-20);
    }


    image(powerimg, xp, yp);
    yp = yp - 15;
    if( yp <=-60){
      expo = false;
      power = false;
      yp = y;
    }
    for(i=0; i<qtorcs; i++){
      if(  xp >=orcx[i] -160 && xp<=orcx[i] + 20 && yp - 70  <= movorcs[i] + 30 ){
        pontos = pontos + 100;
           orcx[i] = -900;

      }
    }
    }
    if(pontos === barreira){
      barreira = barreira + 5000;
      level ++
      if(level%2 != 0){
      vel =  vel + 0.25;
    }
     else if(level%2===0){
      qtorcs = qtorcs + 5;
      if(qtorcs >90){
        qtorcs ==90;
      }

        }
     }

     if(x <=11){
      x = 11;
     }
     if(x>= 449){
      x = 449;
     }

    if(textpower){
      text("CONTEMPLE O MAGO", 100, 300);
    }
  fill(255);
  text( pontos, 590, 120);
  text("level: " + level, 540, 625);
  text(powercont,  590, 280);
}
 if( Tela === 2){
   background(img);
orcx = [];
movorcs = [];
powercont = 0;
level = 1;
pontos = 0;
qtorcs = 30;
vel = 1;
textFont(font);
textSize(35);
text("YOU LOSE", 100, 300);
text("THE GAME", 100, 400);
textSize(25);
text(" melhor placar: "  + bestscore, 50, 450);
text("pressione seta pra baixo para tela inicial", 50, 500);



   if(keyIsDown (DOWN_ARROW)){
    Tela = 0;
   }
 }
     }

