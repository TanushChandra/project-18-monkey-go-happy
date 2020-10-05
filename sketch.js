var bananaImage,bananaGroup,obstacleImg,obstaclegroup;
var backgroun;
var monkeyImg,banana;
var score;
var fakeG;
var jungleImg;

function preload() {
  jungleImg= loadImage("jungle.jpg");
  monkeyImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

bananaImage = loadImage("banana.png");
//obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
 
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  backgroun = createSprite(200,200,400,400);
  backgroun.addImage("jungle.jpg",jungleImg);
   monkey = createSprite(100,350,30,30);
  monkey.addAnimation("walking", monkeyImg);
  monkey.scale = 0.15;
  backgroun.velocityX = -4;
backgroun.x = backgroun.width /2;  

}

function draw() {
  background(220);
    
   if (backgroun.x < 0){
      backgroun.x = backgroun.width/2;
    }
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2;
  }
  drawSprites();
  ban();
  
  stroke("white");
  textSize(18);
  fill("white");
  text("Score: "+ score, 50,50);
  

}



function ban() {
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,350,40,10);
    banana.y = 350;
    banana.addImage("banana.png",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 90;
    bananaGroup.add(banana);
 }
}