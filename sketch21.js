function setup(){

    createCanvas(1000,1000);
    background(0, 0, 0);
    noStroke();
    rectMode(CENTER);
    
}
function draw(){ //open draw

      // center
      filter( BLUR, 10 );
    textSize(600);
    textFont("serif");
    text('w', 250, 620);
    fill(255, 98, 0);
    filter( BLUR, 10 );
    textSize(600);
    textFont("serif");
    text('w', 115, 620);
    fill(255, 225, 0);
    stroke(255, 255, 255);
    strokeWeight(5); // Thicker
    filter( BLUR, 10 );
    textSize(600);
    textFont("serif");
    text('w', 300, 620);
    nofill();
    stroke(255, 255, 255);
    strokeWeight(20); // Thicker
    filter( BLUR, 10 );

    
  }