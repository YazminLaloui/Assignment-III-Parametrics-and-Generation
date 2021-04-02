function setup(){

    createCanvas(1000,1000);
    background(255, 255, 255);
    noStroke();
    rectMode(CENTER);
    
}
function draw(){ //open draw

      // center
      filter( BLUR, 6 );
    textSize(600);
    textFont("serif");
    text('w', 250, 620);
    fill(105, 9, 0);

    textSize(600);
    textFont("serif");
    text('w', 100, 400);
    nofill();
    stroke(255, 0, 0);
    strokeWeight(3); // Thicker

    textSize(600);
    textFont("serif");
    text('w', 300, 620);
    nofill();
    stroke(255, 0, 0);
    strokeWeight(3); // Thicker


    
  }
