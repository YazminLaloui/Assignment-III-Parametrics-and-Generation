function setup(){

    createCanvas(1000,1000);
    background(0,0, 0);
    noStroke();
    rectMode(CENTER);
    
}
function draw(){ //open draw

      // center
      filter( BLUR, 6 );
    textSize(600);
    textFont("serif");
    text('w', 250, 620);
    fill(59, 1, 74);
    filter( BLUR, 6 );
    textSize(600);
    textFont("serif");
    text('w', 90, 360);
    fill(145, 0, 124);
    stroke(59, 1, 74);
    strokeWeight(3); // Thicker
    filter( BLUR, 6 );
    textSize(600);
    textFont("serif");
    text('w', 300, 620);
    nofill();
    stroke(59, 1, 74);
    strokeWeight(3); // Thicker
    filter( BLUR, 6 );

    
  }
