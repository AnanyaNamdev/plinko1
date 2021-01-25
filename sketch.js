const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinko;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2, 790, width, 20);

  for(var d = 0; d <= width; d = d+80) {
      divisions.push(new Division(d, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var p = 120; p <= width; p = p+50) {
    plinkos.push(new Plinko(p, 75));
  }

  for(var p = 120; p <= width-10; p = p+50) {
    plinkos.push(new Plinko(p, 175));
}

for(var p = 120; p <= width-20; p = p+50) {
  plinkos.push(new Plinko(p, 75));
}

for(var p = 120; p <= width-30; p = p+50) {
  plinkos.push(new Plinko(p, 175));
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  for (var s = 0; s < divisions.length; s++) {
    plinkos[s].display();
  }

  for (var s = 50; s < divisions.length; s++) {
    plinkos[s].display();
  }

  for (var s = 100; s < divisions.length; s++) {
    plinkos[s].display();
  }

  for (var s = 150; s < divisions.length; s++) {
    plinkos[s].display();
  }
    
  drawSprites();
 
}