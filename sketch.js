var survivalTime;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var tree,banana_tree;
var ground, invisibleGround, groundImage;
var game_over,game_over_image;
var score;
var PLAY;
var END;
var gamestate=PLAY;

function preload(){
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png");
  monkey_running=           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  banana_tree=loadImage("tree.gif");
  obstacleImage=loadImage("obstacle.png");
  game_over_image=loadImage("game over.png");
}

function setup() {
 background(250); 
 monkey=createSprite(200,500,50,50);
 monkey.addAnimation("running",monkey_running); 
 monkey.scale=0.2;
  monkey.debug;
 monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
 invisibleGround = createSprite(200,500,400,50);
 invisibleGround.visible = false;
 
 bananaGroup=createGroup();
 obstacleGroup=createGroup();
 survivalTime=0;
 score=0;
}
function draw() {
  createCanvas(800,800);
  
  if(gamestate===PLAY){
 if(frameCount % 90===0){
   tree=createSprite(400,400,50,50);
   tree.addAnimation("trees",banana_tree); 
   tree.velocityX=-5;
   tree.scale=5;
   monkey=createSprite(200,500,50,50);
   monkey.addAnimation("running",monkey_running); 
   monkey.changeAnimation("running", monkey_running);
   monkey.scale=0.2;
 }
   if(keyDown("space")){
    monkey.velocityY=-20;
    }
   
    monkey.velocityY = monkey.velocityY + 0.8;
    function fruits(){
if(frameCount % 80===0){
  bananaImage=loadImage("banana.png");
  var banana=createSprite(300,200,30,30);
  banana.addImage(bananaImage);
  banana.scale=0.2;
  banana.velocityX=-8; 
  banana.liftime=150;
  bananaGroup.add(banana);
  if(bananaGroup.isTouching=(monkey)){
  score++;
  }
}
}
    function obstacle_cool(){   
  if(frameCount % 300===0){
  obstacle=createSprite(590,500,50,50);
 obstacle.addImage("obstacles",obstacleImage);
 obstacle.scale=0.3;
  obstacle.velocityX=-18;
  obstacleGroup.add(obstacle);
    
  } 
   
}
    fruits();
    
obstacle_cool();
    monkey.collide(invisibleGround);
    drawSprites();
    textFont("IMPACT");
stroke("white");
  textSize(20);
  fill("white");
  text("S C O R E : "+score,500,50);
  stroke("white");
  textSize(20);                  
  fill("white");
  survivalTime=Math.round(frameCount/frameRate());
  text("S U R V I V A L  T I M E : "+survivalTime,60,50);
   
  }
  
  else if(obstacleGroup.isTouching(monkey)){
  gamestate==END;
 
   
  }
  if(gamestate=(END)){
   game_over=createSprite(300,300,30,30);
 game_over.addImage(game_over_image);
    
  }
  }
  
