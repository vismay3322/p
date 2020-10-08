
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var GROUND;
var DIVISION;
var plinko;
var divisions=[]

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	GROUND = new Ground(400,790,1000,20);
	DIVISION = new Division(5,600,10,400);
	/*DIVISION2 = new Division(5+80,600,10,400);
	DIVISION3 = new Division(5+80+80,600,10,400);
	DIVISION4 = new Division(5+80+80+80,600,10,400);
	DIVISION5 = new Division(5+80+80+80+80,600,10,400);
	DIVISION6 = new Division(5+80+80+80+80+80,600,10,400);*/

	for(var K=0; K<=width;K=K+80){
	divisions.push(new Division(K,height-300/2,10,300))	
	}
	plinko = new Plinko(200,200,10);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  GROUND.display();
  DIVISION.display();
  plinko.display();

  drawSprites();
 
}



