function setup(){

    createCanvas(1000,1000);
    background(0, 184, 147);
    
}
function draw(){ //open draw


    textSize(600);
    textFont('Georgia');
    text('w', 250, 620);
    fill(184, 0, 107);
    filter( BLUR, 6 );


    textSize(600);
    textFont('Georgia');
    text('w', 250, 620);
    nofill();
    stroke(184, 0, 107);
    strokeWeight(3); // Thicker



}