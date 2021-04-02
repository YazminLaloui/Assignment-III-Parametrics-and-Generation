// Clear the screen on mouse press.
function draw() {


    ellipse(mouseX, mouseY, 20, 20);
    fill(184, 245, 255);
  }
  function mousePressed() {
    clear();
    background(0, 0, 0);
    createCanvas(1000, 1000);
  }