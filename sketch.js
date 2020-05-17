
var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(400, 200, 50, 80);
   fixedRect.shapeColor = 'green';
   fixedRect.debug = true;
   movingRect = createSprite(600,300,80,30);
   movingRect.shapeColor = 'green';
   movingRect.debug = true;
  }

function draw() {
  background(255,255,255);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
{
  fixedRect.shapeColor = 'red';
  movingRect.shapeColor = 'red';
} else {
  fixedRect.shapeColor = 'green';
  movingRect.shapeColor = 'green';
}
  drawSprites();
}