const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball();
  chain = new Chain( {x: 250, y: 200}, ball.body);
 
}

function draw() {
  Engine.update(engine);
  background("yellow");  

  ball.display();
  chain.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain.fly();
}