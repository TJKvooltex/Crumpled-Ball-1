
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var redboxPart1;
var redboxPart2;
var redboxPart3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,480,40);
	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)

	redboxPart1	= createSprite(900,655,200,20,{isStatic:true});
	redboxPart1.shapeColor="red";
	redboxPart2	= createSprite(990,600,20,100,{isStatic:true});
	redboxPart2.shapeColor = "red";
	redboxPart3	= createSprite(810,600,20,100,{isStatic:true});
	redboxPart3.shapeColor = "red"; 
    

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	World.add(world,redboxPart1);
	World.add(world,redboxPart2);
	World.add(world,redboxPart3);

	


}


function draw() {
  rectMode(CENTER);
  background(0);
  


  paper.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-505} )



}



}

