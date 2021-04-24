var player1,player1I;
var player2,player2I;
var player3,player3I;
var backGround,backgroundImage;
var light1,light1I
var light2,light2I
var light3,light3I

function preload(){
    player1I = loadImage("tron/tron1.png");
    player2I = loadImage("tron/tron2.png");
    player3I = loadImage("tron/tron3.png");
    backgroundImage = loadImage("tron/1.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

  //  backGround = createSprite(windowHeight,winowWidth);
   // backGround.addImage(backgroundImage);
    
    player1 = createSprite(200,450,20,20);
    player1.addImage(player1I);

    player2 = createSprite(400,450,20,20);
    player2.addImage(player2I);
    
    player3 = createSprite(600,450,20,20);
    player3.addImage(player3I);

}

function draw(){
    background(0);

    drawSprites();
}