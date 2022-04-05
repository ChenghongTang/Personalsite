
let theImage;
function preload(){
  theImage = loadImage("photo.png")
}


function setup(){
    createCanvas(windowWidth,windowHeight)
    background(100)
}



function draw() {
    noStroke()
    fill(255,0,0);
    ellipse(mouseX,mouseY,100,100)
}