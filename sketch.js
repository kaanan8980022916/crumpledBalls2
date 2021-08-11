
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1;
var ground1,paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

d1 = new dustbin(500,280);
ground1 = new ground(400,390,800,20);
paper1 = new paper(70,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  d1.display();
  ground1.display();
  paper1.display();
 
  if(keyWentDown("UP_ARROW")) { 
	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:265, y:-330});
	 }
}



