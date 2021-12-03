 var Apple,Bannana,Orange;
 var player_basket;
 var bone, coin,napkins,cutlery;
 var Lasanga,pita,steak,Sauce;
 var glass_trash,paper_trash,plastic_trash;
 var Forest;
 var score;
 var fruitgroup,othergroup,trashgroup;
 var GameOver,Restart, GameOverImg, RestartImg;
 var score = 0;

 function preload(){
 player_basket = loadImage("assets/Basket.png");
fruit1 = loadImage("assets/fruit1.png");
 fruit2 = loadImage("assets/fruit2.png");
 other1 = loadImage("assets/other1.png");
 other2 = loadImage("assets/other2.png");
 other3 = loadImage("assets/other3.p0ng");
 other4 = loadImage("assets/other4.png");
 other5 = loadImage("assets/other5.png");
 fruit3 = loadImage("assets/fruit3.png");
 trash1 = loadImage("assets/trash1.png");
 other6 = loadImage("assets/other6.png");
 trash2 = loadImage("assets/trash2.png");
 other7 = loadImage("assets/other7.png");
 GameOverImg = loadImage("assets/GAMEOVER.png");
 RestartImg - loadImage("assets/RESET.png");
 
 }

 function setup(){

  createCanvas(400, 400);

     player_basket = createSprite(40,200,20,20);
     player_basket.addImage("basket", BasketImage );
     GameOver = createSprite(40,200,20,20);
     GameOver.addImage("GameOver", GameOverImg);
     Restart = createSprite(40,200,20,20);
     Restart.addImage("Restart", RestartImg);
    
    



     background("forest.png")


}

if(frameCount % 50 === 0){
  var other = createSprite(200,165,10,40);
  other.setvelocity = -(6+3*score/100);

  var rand = Math.round(random(1,7));
  switch(rand){
    
  }
}

if (frameCount % 50 === 0){
  var other = createSprite(600,165,10,40);
other.velocityX = -(6 + 3*score/100);

var rand = Math.round(random(1,7));
switch(rand){
case 1: other.addImage(other1);
break;
case 2: other.addImage(other2);
break;
case 3: other.addImage(other3);
break;
case 4: other.addImage(other4);
break;
case 5: other.addImage(other5);
break;
case 6: other.addImage(other6);
break;
case 7: other.addImage(other7);
break;
default: break;

}
}
other.scale = 0.5;
other.lifetime = 300;
othergroup.add(other);

if (frameCount % 50 === 0){
  var fruit = createSprite(600,165,10,40);
fruit.velocityX = -(6 + 3*score/100);

var rand = Math.round(random(1,3));
switch(rand){
case 1: fruit.addImage(fruit1);
break;
case 2: fruit.addImage(fruit2);
break;
case 3: fruit.addImage(fruit3);
break;
default: break;

}
fruit.scale=0.5;
fruit.lifetime = 300;
fruitgroup.add(fruit);
}
if(frameCount % 50 === 0){
  var trash = createSprite(600,165,10,40);
fruit.velocityX = -(6+3*score/100);

var rand = Math.round(random(1,3));
switch(rand){

case 1: trash.addImage(trash1);
break;
case 2: trash.addImage(trash2);
break;
case 3: trash.addImage(trash3);
break;
default: break;

trash.scale=0.5;
trash.lifetime = 300;
trashgroup.add(trash);
}
}