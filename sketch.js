
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boyImage = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(600,500);
	ground = new Ground(400,700, width , 10);
	platform = new Ground(10,700,300,200);

	//mangoes
	m1 = new Mango(400,100);
	m2 = new Mango(650,50);
	m3 = new Mango(600,150);
	m4 = new Mango(550,250);
	m5 = new Mango(500,150);
	m6 = new Mango(400,250);
	m7 = new Mango(450,125);
	m8 = new Mango(600,225);
	m9 = new Mango(675,325);	

	//stone
	s1 = new Stone(10,30);

	//connection
	c1 = new Chain(s1.body , {x: 50 , y: 500})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  text (" Press Space for One more Attempt", 50, 80);

  image(boyImage , 10,450, 200,200);
  tree.display();
  ground.display();
  platform.display();


  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m7.display();
  m9.display();
  m8.display();
  m6.display();

  s1.display();
	c1.display();

	detectCollision(s1, m1);
	detectCollision(s1, m2);
	detectCollision(s1, m3);
	detectCollision(s1, m4);
	detectCollision(s1, m5);
	detectCollision(s1, m6);
	detectCollision(s1, m7);
	detectCollision(s1, m8);
	detectCollision(s1, m9);
	//detectCollision(s1, m1);
	//detectCollision(s1, m1);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(s1.body, {x: mouseX , y: mouseY});
	
	}
	
function mouseReleased(){
		c1.fly();
}

function detectCollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
// console.log(lmango.w + lstone.w)
  	if(distance<=lmango.w+lstone.w)
    {
      //console.log(distance);
		Matter.Body.setStatic(lmango.body,false);
		//lmango.w = 20;
		//console.log(ground.y)
		//Matter.Body.setPosition(lmango.body , {x : mangoBodyPosition.x , y : 700})
		//console.log(lmango.y)
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(s1.body, {x:50, y:500}) 
	 c1.attach(s1.body);
	}
  }



