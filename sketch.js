var wall,bullet;
var speed,weight,thickness,height;
var damage;

function setup() {
  createCanvas(800,400);
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  height = 200;

  wall = createSprite(800,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  damage = (0.5*weight*speed^2)/(thickness^3)
}

function draw() {
  background("skyblue");  
  bullet.velocityX = speed;

  collisionDitection(bullet,wall);
  drawSprites();
}

function collisionDitection(obj1,obj2){
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2
    && obj1.y - obj2.y < obj1.height/2 + obj2.height/2){
      if(damage <= 10){
        obj1.shapeColor = "green";
      } else if(damage > 10){
        obj1.shapeColor = "red";
      }
      obj1.velocityX = 0;
    }
}
