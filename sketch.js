var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;

var gameState = "play";
var pa;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    mousePressed();
    
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

   text("500",25,520);
   text("500",100,520);
   text("500",185,520);
   text("500",260,520);
   text("100",340,520);
   text("100",420,520);
   text("100",505,520);
   text("200",585,520);
   text("200",665,520);
   text("200",745,520);

  Engine.update(engine);
 
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   

for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}

if(turn === 5 && gameState === "play"){
  gameState = "end"


}

if(gameState === "end"){
  textSize(60);
  text("GAME OVER",200,350);


}
if(pa !== null){
    pa.display();

  if(pa.body.position.y > 760 && 
     pa.body.position.x > 0 &&
       pa.body.position.x < 350){

      score = score+500;
      pa = null;

    }
  
  
  else if(pa.body.position.y > 760 &&
          pa.body.position.x > 360 &&
          pa.body.position.x < 600){

      score = score+100;
      pa = null;

    }

  else if(pa.body.position.y > 760 &&
          pa.body.position.x > 370 &&
          pa.body.position.x < 800){

    score = score+200;
    pa = null;

  }

}

}

function mousePressed(){
  if(gameState !== "end"){

    turn = turn+1;
    pa = new Particle(mouseX, 10,10);

}
}