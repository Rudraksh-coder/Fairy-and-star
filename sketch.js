var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;
var sound, edges;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fImg1.png", "fairyImage2.png");
	sound = loadSound("JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 800);

	sound.loop();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(390, 400);
	fairy.addAnimation("fairyAnim", fairyImg);
	fairy.scale = 0.2;
	fairy.setCollider("circle", 480, 0, 80);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  edges = createEdgeSprites();

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.isTouching(fairy)) {
	  Matter.Body.setStatic(starBody,true);
  }

  
  console.log(star.y);

  fairy.collide(edges);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 30;
	}
	if(keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 30
	}
  
	
}
