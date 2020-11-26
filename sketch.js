const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = []
var plinkos = []
var divisions = []

var divisonHeight = 300


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(135,790,700,20);

 for(var k = 0; k <=width; k = k + 80){
   divisions.push(new Divison(k, height-divisonHeight/2, 10, divisonHeight))
 }
  
}

function draw() {
  background(0,0,0); 
  
  
  
  ground.display();
  drawSprites();
}