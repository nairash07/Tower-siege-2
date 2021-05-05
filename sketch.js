const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var platform;
var block1;

var polygon;
var slingShot;

var polygonIMG;

function preload()
{
   polygonIMG=loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,610);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //polygon = createSprite(100,200,20)

  ground1 = new Ground(500,520,250,20);
  ground2 = new Ground(900,250,250,20);
  ground3 = new Ground(600,600,1200,20);
  

  block1 = new Block(410,500,30,40);
  block2 = new Block(440,500,30,40);
  block3 = new Block(470,500,30,40);
  block4 = new Block(500,500,30,40);
  block5 = new Block(530,500,30,40);
  block6 = new Block(560,500,30,40);
  block7 = new Block(590,500,30,40);

  block8 = new Block(440,460,30,40);
  block9 = new Block(470,460,30,40);
  block10 = new Block(500,460,30,40);
  block11 = new Block(530,460,30,40);
  block12 = new Block(560,460,30,40);

  block13 = new Block(470,420,30,40);
  block14 = new Block(500,420,30,40);
  block15 = new Block(530,420,30,40);

  block16 = new Block(500,380,30,40);

  block17 = new Block(840,225,30,40);
  block18 = new Block(870,225,30,40);
  block19 = new Block(900,225,30,40);
  block20 = new Block(930,225,30,40);
  block21 = new Block(960,225,30,40);

  block22 = new Block(870,185,30,40);
  block23 = new Block(900,185,30,40);
  block24 = new Block(930,185,30,40);

  block25 = new Block(900,145,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(80,530,20);
  slingshot = new SlingShot(this.polygon,{x:100,y:200});
  
  World.add(world,polygon);


  

  //Engine.run(engine);
}

function draw() {
  background("purple"); 
  rectMode(CENTER);
  //Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  
  
  fill("lightgreen");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("lightblue")
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  fill("lightgreen");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("lightblue");
  block22.display();
  block23.display();
  block24.display();

  fill("pink");
  block25.display();


  slingshot.display();

  imageMode(CENTER)
  image(polygonIMG, polygon.position.x,polygon.position.y,40,40);
   
  //drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
    if(keyCode===32)
    {
        slingshot.attach(polygon)
    }
}
