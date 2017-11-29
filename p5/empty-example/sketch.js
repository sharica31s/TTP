var r, g, b;
function setup() {
   
  createCanvas(1000, 700, WEBGL)
     background(r, g, b);

    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
translate(200, 200, -200);
    box(mouseX, mouseY);
    if (keyCode === LEFT_ARROW) {
        r = 0;
        g = 0;
        b = 0;
  }
}
function keyPressed(){
    r = random(250);
    g = random(250);
    b = random(250); 
    background(r, g, b); 
   }    
