var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223 ,321);
  thickness=random(22,83)
  weight=random(30,52);
  bullet = createSprite(200, 200, 50, 20);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.shapeColor="white"
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;

}

function draw() {
  background(150,150,150);  
  drawSprites();
  
  if (wall.x - bullet.x <= wall.width/2 + bullet.width/2){
    bullet.velocityX=0
    bullet.x=1190
    
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  }
    if (damage <= 10 ){
      wall.shapeColor="green";
    }

    else if(damage > 10){
      wall.shapeColor="red";
    } 

  

}