function setup(){

    createCanvas(1000,1000);
    background(0, 0, 0);
    
}
function draw(){ //open draw
    
    textSize(600);
    text('w', 250, 620);
    textFont("serif");
    noFill();
    stroke(255, 0, 200);
    strokeWeight(3); // Thicker
    filter( BLUR, 15 );
}