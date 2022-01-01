
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function setup() {
	createCanvas(1000,550,500,100);
     
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	ground =new Ground(400,530,1500,15);
    right = new Ground(830,462,15,120);
    left = new Ground(630,462,15,120);
	
    rightside = new Ground(997,200,5,675);
    leftside = new Ground(2,200,5,675);
    top_wall = new Ground(0,2,2000,5);
  
	var ball_options={
		isStatic:false,
		restitution:1,
		//friction:0,
		density:0.3
	}
	ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);
	ellipseMode(RADIUS);
    rectMode(CENTER);
	
	//Create the Bodies Here.



  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  ground.show();
  left.show();
  right.show();
  leftside.show();
  rightside.show();
  top_wall.show();
  
  fill("lightblue")
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed(){
	//if (keyCode == ){

		console.log("hello")
		Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:-4}); 
	//}
}




