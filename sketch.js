const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var gameState = 0;
var GB_IMG;
var earth;
var driedGroundIMG,oceanIMG,moistG,forestIMG,clearSkyIMG,earthIMG;
var girlCollided,girlRunning,girl;
var Button1;
var bg;
var lifelvl1 = 21;
var block1=[];
var obstacle1,obstacle,obstacle2

function preload(){
  polygon_img=loadImage("polygon.png");
  GB_IMG=loadImage("GW_IMG.png");
  driedGroundIMG =loadImage("ground.png");
  oceanIMG =loadImage("ocean.png");
  moistG =loadImage("MoisturizedGround1.png")
  girlCollided =loadAnimation("GirlCollided.png")
  girlRunning= loadAnimation("GirlRun1.png","GirlRun2.png","GirlRun3.png")
  Button1= loadImage("Click.png")
  forestIMG= loadImage("forest.png")
  clearSkyIMG= loadImage("cleanAir.png")
  earthIMG= loadImage("Earth.png")
  obstacle1=loadImage("weed.png")
  obstacle2=loadImage("pest.png")

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //]evel one
  block1[0] = new Block(300,275,30,40);
  block1[1] = new Block(330,275,30,40);
  block1[2]= new Block(360,275,30,40);
  block1[3] = new Block(390,275,30,40);
  block1[4]= new Block(420,275,30,40);
  block1[5] = new Block(450,275,30,40);
  block1[6]= new Block(480,275,30,40);

  //level two
  block1[7]= new Block(330,235,30,40);
  block1[8] = new Block(360,235,30,40);
  block1[9]= new Block(390,235,30,40);
  block1[10]= new Block(420,235,30,40);
  block1[11]= new Block(450,235,30,40);
  //level three
  block1[12]= new Block(360,195,30,40);
  block1[13] = new Block(390,195,30,40);
  block1[14]= new Block(420,195,30,40);
  //top
  block1[15] = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  block1[16]= new Block(640,175,30,40);
  block1[17]= new Block(670,175,30,40);
  block1[18]= new Block(700,175,30,40);
  block1[19]= new Block(730,175,30,40);
  block1[20]= new Block(760,175,30,40);
  //level two
  block1[21]= new Block(670,135,30,40);
  block1[22]= new Block(700,135,30,40);
  block1[23]= new Block(730,135,30,40);
  //top
  block1[24] = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.rectangle(200,200,20,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});
  earth = createSprite(400,200,50,50)
  earth.addImage(driedGroundIMG)
  earth.scale = 1.2
  earth.visible = false
  bg= createSprite(450,450,900,400)
  bg.addImage(moistG)
  bg.visible=false
  girl =createSprite(50,300,20,20)
  girl.addAnimation("running",girlRunning)
  girl.scale=0.2
  //girl.addAnimation(girlCollided)
  girl.visible=false
  obstaclesGroup = new Group()
  

}
function draw() {
  //background("black")
  if(gameState === 0){
  background("black")
  textSize(20)
  fill("red")
  text("Everyday we see trash on the floor.",20,20)
  text("Do we care to pick it up and throw it?",20,40)
  text("No, what's the reason? Obvious answer: ",20,60)
  text("It's not mine! But did you know just because of this small act of laziness we will have huge problems in the future...",20,80)
  text("This is another earth from another universe and this earth is going to go extinct...",20,100)
  text("So, Let's help an Earth hero Captain Good Guy save his earth!!!",20,120)
  fill("white")
  text("Click Here To Play",400,200)

  if(mousePressedOver(earth)){
    gameState = 3
  }
  }

  if(gameState === 2){
    background(oceanIMG)
    textSize(25)
    fill("white")
    text("YAY!!! YOU SAVED THE WATER RESOURCE OF THIS EARTH!",100,30)
    fill("white")
    textSize(15)
    stroke(10)
    text("Fellow Citizens! We should not leave the importance of conserving water in this game. We should practise this in reality",20,60)
    text("Here are some ways to stop pollution of water:",20,80)
    text("1.Use Biodegradable Bags and find a replacement for plastic",20,100)
    text("2.Prevent wastage of water",20,120)
    text("3.Spread awareness of the importance of water",20,140)
    text("Water is a vital resource...We cannot imagine a world without water",20,160)
    var NextLvlButton = createSprite(450,300,100,20)
    NextLvlButton.addImage(Button1)
    NextLvlButton.scale=0.2
    drawSprites();
    if(mousePressedOver(NextLvlButton)){
      gameState = 4
    }

  }

  if(gameState === 3){
   bg.velocityX=-3
   bg.visible= true
   if(bg.x<200){
     bg.x = bg.width/4
   }
   girl.visible=true



  //drawSprites();
  }

  if(gameState === 1){
  //background(driedGroundIMG);
 earth.visible= true
 earth.scale=2
 //if(polygon.y === 350){
  //lifelvl1 -= 1
 //}
 
  //Engine.update(engine);
  fill("white")
  stroke(5)
  text("Lives Left:"+lifelvl1,22,160)
  textSize(19);
  fill("white");
  text("Drag and Release Captain Good Guy to Restore the water in the Earth",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!! But remember there are only 15 chances in total so use it wisely...",360 ,350);
  //ground.display();
  stand1.display();
  stand2.display();
  var ScoreWater = createSprite(50,100,20,100)
  var Score1 = createSprite(50,145,20,10)
  Score1.shapeColor="blue"
 for(var i = 0;i < 25;i++)
 block1[i].display();
 
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,70,70);

  

  if(lifelvl1<=0){
    background("black")
    textSize(30)
    stroke(20)
    fill("red")
    text("GAME OVER!!!",400,200)
    text("Reload the page to play again!!!",300,250)

  }
  //slingShot.display();
  }
  

  if(gameState===4){
    background(forestIMG)
    fill("white")
    stroke(10)
    text("Wow! Look at this beautiful forest! Isn't it Enchanting",20,20)
    text("Forests are really important...Let's see why they are necessary to conserve forests and wildlife",20,40)
    text("1.They make the water cycle process properly",20,60)
    text("2.It provides food,wood,medicines etc...",20,80)
    text("3.It provides home to variety of animals and birds and prevents wildlife from mixing with human being",20,100)
    text("So, Let's conserve Forests and also conserve wildlife by doing that!!!!",20,120)
    text("Here are some ways we can conserve forests:",20,140)
    text("1.practise Afforestation or Reforestation",20,160)
    text("2.Use paper and the products we get from trees and plants wisely",20,180)
    text("3.when you waste food think of the others who don't have the privalages you have",20,200)
    var NextLvlButton2 = createSprite(450,300,100,20)
    NextLvlButton2.addImage(Button1)
    NextLvlButton2.scale=0.2
    drawSprites();

    if(mousePressedOver(NextLvlButton2)){
      gameState = 5
    }
  }

  if(gameState===5){
    //game3
  }

  if(gameState===6){
    background(clearSkyIMG)
    fill("white")
    stroke(10)
    text("Wow! Look there's a rainbow!",20,20)
    text("Ahhh...Finally fresh air...free from dust and impurities",20,40)
    text("see, clean air is really important. If affects the environment in many ways...Example:",20,60)
    text("The rich white marble of the Taj Mahal is turning yellow...Why?",20,80)
    text("This is because of the impurities and the acidic nature of air in that environment",20,100)
    text("Here are some ways we can keep the aie clean:",20,120)
    text("1.Attach filters into facrory chimneys so that the harm of the gases directly can be reduced",20,140)
    text("2.Plant more trees as trees take in carbondioxide and give out oxygen",20,160)
    text("3.Use electricity as a replacement of fossil fuels which pollute the air when they burn(pollution cause due to traffic mainly)",20,180)
    var NextLvlButton3 = createSprite(450,300,100,20)
    NextLvlButton3.addImage(Button1)
    NextLvlButton3.scale=0.2
    drawSprites();

    if(mousePressedOver(NextLvlButton3)){
      gameState = 7
    }
  }

  if(gameState===7){
    background(earthIMG)
    textSize(30)
    stroke(20)
    fill("red")
    text("Yay you saved this earth!!!",300,200)
    textSize(15)
    text("We must prevent our earth from coming to the end by preventing pollution and global warming",150,250)

  }
  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
  
}
function keyPressed(){     
  if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:180,y:80}) 
    slingShot.attach(polygon);
    lifelvl1-=1
}
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}