var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  //Random number to speed and weight of the car
  speed=random(223,321);
 thickness=random(22,83);
 weight=random(30,52);

 bullet = createSprite(50, 200, 70, 20);
 bullet.shapeColor="white";

 wall = createSprite(1200, 200,thickness, height/2);
 wall.shapeColor="blue";

 bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  console.log(hasCollided(wall,bullet));
  if(hasCollided(wall,bullet)){
      bullet.velocityX=0;

      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      console.log(damage);
      if(damage>10){
        bullet.shapeColor="red";
      }
      if(damage<10){
        bullet.shapeColor="green";
      }
  }
  drawSprites();
}

function hasCollided(wall,bullet){
  var lEdge=bullet.x + bullet.width;
  var rEdge=wall.x;
  if(lEdge>=rEdge){
    return true;
  }
  else
  return false;
}