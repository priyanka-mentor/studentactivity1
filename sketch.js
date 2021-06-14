var bckgd,bckgdimg;
var fighter,fighterimg,fighterimg2;
var bulletsimg;
var fighterplanesGroup,fighterplanesGroup2;
var fighterplanesimg; 
var bulletsGroup,enemybulletsGroup;
var score=0;
function preload(){
  bckgdimg=loadImage("images/space.png");
  fighterimg=loadImage("images/fighter.png");
  fighterplanesimg2=loadImage("images/fighter2 (2).png");
  bulletsimg=loadImage("images/bullets.png");
 fighterplanesimg=loadImage("images/fighterdense.png");
}
function setup() {
  createCanvas(400, 400);
  bckgd= createSprite(300,300,600,600);
  bckgd.addImage(bckgdimg);
  bckgd.velocityY=1;
  bckgd.scale=1.5;
  
  fighter=createSprite(300,350,5,5);
  fighter.addImage(fighterimg);
  fighter.scale=0.2
  
 
}

function draw() {
  background("white");
  fighter.x=mouseX;

  if (bckgd.y > 400){
   bckgd.y = 200;
  }
 

  drawSprites();

}

