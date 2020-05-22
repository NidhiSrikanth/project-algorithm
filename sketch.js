var fixRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixRect= createSprite(200, 200, 50, 80);
  fixRect.shapeColor= "blue";
  fixRect.debug=true;
  fixRect.velocityX=2;
  
  movingRect= createSprite(400,200,80,50);
  movingRect.shapeColor= "Red";
  movingRect.debug=true;
  movingRect.velocityX=-2;
  
}

function draw() {
  background(0);  
  drawSprites();
  //movingRect.x= World.mouseX;
  //movingRect.y= World.mouseY;

  if (movingRect.x-fixRect.x < movingRect.width/2+ fixRect.width/2 &&
    fixRect.x-movingRect.x< movingRect.width/2+fixRect.width/2 &&
    movingRect.y-fixRect.y < movingRect.height/2+ fixRect.height/2 &&
    fixRect.y-movingRect.y< movingRect.height/2+fixRect.height/2){
    movingRect.shapeColor= "green";
    fixRect.shapeColor="purple";


  }
  else {
    movingRect.shapeColor="red";
    fixRect.shapeColor="blue";
  }

  if (movingRect.x-fixRect.x < movingRect.width/2+ fixRect.width/2 &&
    fixRect.x-movingRect.x< movingRect.width/2+fixRect.width/2 ){
      movingRect.velocityX=movingRect.velocityX * -1;
      fixRect.velocityX=fixRect.velocityX  * -1;
    }

    if (movingRect.y-fixRect.y < movingRect.height/2+ fixRect.height/2 &&
      fixRect.y-movingRect.y< movingRect.height/2+fixRect.height/2 ){
        movingRect.velocityY=movingRect.velocityY * -1;
        fixRect.velocityY=fixRect.velocityY * -1;
      }
}