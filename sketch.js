var zenai,Tourus;
var wall1,wall2;


function setup() {
  createCanvas(1600,600);

zenai=createSprite(100,50,10,10);
zenai.shapeColor="green";


Tourus=createSprite(100,200,10,10);
Tourus.shapeColor="red";


wall1=createSprite(400,50,5,10);
wall1.shapeColor="blue";


wall2=createSprite(400,200,5,10);
wall2.shapeColor="yellow";



}
function draw() {
  background(0,0,0);  
  zenai.display();
  Tourus.display();
  
  wall2.display();
 

  zenai.velocityX=2
  Tourus.velocityX=2
  
 
 

  if (zenai - wall1 < wall1/2 + zenai.width/2
    && wall1 - zenai.x < wall1.width/2 +zenai.width/2) {
 zenai.velocityX = zenai.velocityX * (-1);
 wall1.velocityX = wall1.velocityX * (-1);
    
 if (Tourus.x - wall2.x < wall2.width/2 + Tourus.width/2
  && wall2.x -Tourus.x < wall2.width/2 + Tourus.width/2) {
Tourus.velocityX = Tourus.velocityX * (-1);
wall2.velocityX = wall2.velocityX * (-1);

  }
}



zenai.collide(wall1)


  drawSprites();
}