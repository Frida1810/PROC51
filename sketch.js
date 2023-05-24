var enemy1, enemy1Img, enemy2, enemy2Img, enemy3, enemy3Img;
var spaceship, spaceshipImg
var bgImg, bg

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var life = 3

function preload(){

  spaceshipImg= loadImage("assets/nave-1.png")

  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  enemy1Img= loadImage("assets/nave-2.png")
  enemy2Img= loadImage("assets/nave-3.png")
  enemy3Img= loadImage("assets/nave-4.png")

  bgImg= loadImage("assets/bg.PNG")


}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,50,50)
  bg.addImage(bgImg)
  bg.scale = 2

  spaceship= createSprite(230, 400, 50, 50);
  spaceship.addImage("sship", spaceshipImg);
  spaceship.scale = 0.6
  spaceship.setCollider("rectangle",0,0,300,300)

   heart1 = createSprite(displayWidth-1250,40,20,20)
   heart1.visible = false
   heart1.addImage("heart1",heart1Img)
   heart1.scale = 0.3

   heart2 = createSprite(displayWidth-1250,40,20,20)
   heart2.visible = false
   heart2.addImage("heart2",heart2Img)
   heart2.scale = 0.3

   heart3 = createSprite(displayWidth-1250,40,20,20)
   heart3.addImage("heart3",heart3Img)
   heart3.scale = 0.3
  

  enemyGroup = new Group();
}

function draw() {
  background(0);  

  drawSprites();
}