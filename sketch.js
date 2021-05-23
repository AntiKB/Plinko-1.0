const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var Division1;
var Division2;
var Division3;
var Division4;
var Division5;
var Division6;
var Division7;

var Particles = [];
var Plinkos = [];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  Division1 = new Division(10,700,20,160);
  Division2 = new Division(90,700,20,160);
  Division3 = new Division(170,700,20,160);
  Division4 = new Division(240,700,20,160);
  Division5 = new Division(310,700,20,160);
  Division6 = new Division(390,700,20,160);
  Division7 = new Division(470,700,20,160);

  for(var i = 40;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,75));
  }
  for(var i = 15;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,175));
  }
  for(var i = 40;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,275));
  }
  for(var i = 15;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,375));
  }
  for(var i = 40;i <= width;i = i+50){
    Plinkos.push(new Plinko(i,475));
  }
}

function draw() {
  background("BLACK");
  Engine.update(engine);

  ground.display();

  Division1.display();
  Division2.display();
  Division3.display();
  Division4.display();
  Division5.display();
  Division6.display();
  Division7.display();

  if(frameCount % 10 == 0){
    Particles.push(new Particle(random(width/2-240,width/2+240),5,5));
    console.log("Particle.spawn: " + i);
  }

  for(var i = 0;i < Plinkos.length;i++){
    Plinkos[i].display();
  }
  for(var i = 0;i < Particles.length;i++){
    console.log("Particle.display: " + i);
    Particles[i].display();
  }
}