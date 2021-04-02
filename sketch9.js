function setup() {
    createCanvas(1000, 1000);
    noStroke();
    ellipseMode(CENTER);
  }
  
  function draw() {
    background(115, 0, 255);
    fill(242, 232, 255);
    textSize(600);
    text('w', 250, 600);
    textFont("serif");


    fill(204, 0, 255); // 25% opacity.
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    ellipse(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);

  }
  