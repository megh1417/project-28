
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var stone,tree,mango1,ground;
var mango2,mango3,mango4;
var world;

function preload()
{
	boy= loadImage ("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(1200, 600);
	ground= new Ground(1200,600,50,20)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 background(0);
 image(boy,200,200,200,300); 


 ground.display();
  

 
}



