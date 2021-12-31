var engine, world;
var backgroundImg;
var snowflakesImg;

function preload(){
  backgroundImg = loadImage("snow3.jpg");
  snowflakesImg = loadImage ("snow4.webp");
}

function setup() {
  var canvas = createCanvas(800,400);
  


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);
snowflakesImg;

  drawSprites();
}
