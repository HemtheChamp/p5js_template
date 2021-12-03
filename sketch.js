var ball={
  x:20,
  y:100,
  r:30,
  xspeed:0,
  yspeed:0,
  color:['purple','red','green','blue',]
  

function setup() {
  background('black'); 
  createCanvas(400, 400);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[3]);
  ball.xspeed=1;
  ball.x=ball.x+ball.xspeed;
}

function draw() {
  background(220);
}
