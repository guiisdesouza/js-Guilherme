function setup() {
  createCanvas(600, 600);
   background("white");
}

function draw() {
  stroke ("blue");
  fill("violet");
  
  if(mouseIsPressed){
rect (mouseX, mouseY, 20,20);
  } 
}
