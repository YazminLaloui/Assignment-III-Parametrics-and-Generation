function setup() {
    createCanvas(1000, 1000);
    noStroke();
    rectMode(CENTER);
  }
  
  function draw() {
    background(0, 0, 0);
    fill(153, 255, 0);
    textSize(600);
    text('w', 250, 600);
  

  
    fill(0, 0, 0);
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
  }
  