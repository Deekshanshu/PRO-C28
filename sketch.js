
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boyImg,boy
var stone
var mango1, mango2, mango3, mango4, mango5
var ground
var tree
var rope

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

    boy = createSprite(150,640, 10,10);
	boy.addImage(boyImg)
	boy.scale=0.1

	stone = new Stone(100,50 ,50)

	ground = new Ground(600,height,12000,20)
	
	tree = new Tree(width/2,450 ,280,500)
	
	mango1 = new Mango(width/2,450 ,50)
	mango2 = new Mango(651,300 ,50)
	mango3 = new Mango(700,350 ,50)
	mango4 = new Mango(590,395 ,50)
	mango5 = new Mango(800,395 ,50)

	rope = new Rope(stone.body,{x:99,y:585})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  

  ground.display();

  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  rope.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    rope.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone){
Matter.Bady.setStatic(lmango.body,false)
  }
}


