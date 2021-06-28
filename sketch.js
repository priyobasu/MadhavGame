var bgimage, bgsprite;
var boy,boyani, boystop;
var friend, friendani,friendstop,friendG;
function preload(){
bgimage=loadImage("bg.jpg");

boyani=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png");
boystop=loadAnimation("boy1.png");

friendani=loadAnimation("f1.png","f2.png","f3.png","f4.png","f5.png");
friendstop=loadAnimation("f1.png");


}


function setup() {
  createCanvas(800,400);
  bgsprite=createSprite(400,50);
  bgsprite.addImage(bgimage);
  bgsprite.velocityX=-3;
  bgsprite.scale=1.3

  boy=createSprite(50,290);
  boy.addAnimation("walking",boyani);
  boy.addAnimation("stop",boystop);
  
  friendG=createGroup();
}

function draw() {
  background("white");  

  if(bgsprite.x<0){
    bgsprite.x=400
  }

  spawnFriend();

  for(var i=0;i<friendG.length;i++){
    if(friendG.get(i).isTouching(boy)){
   
      friendG.get(i).changeAnimation("stop",friendstop);
      friendG.get(i).x=friendG.get(i).x+10;
      boy.changeAnimation("stop",boystop);
      bgsprite.velocityX=0;
    
    }
  }

 
  drawSprites();
}

function spawnFriend(){
  if(frameCount%250===0){
  friend= createSprite(800,290);
  friend.velocityX=-3;
  friend.addAnimation("walking",friendani);
  friend.addAnimation("stop",friendstop);
  friendG.add(friend);
  }

}