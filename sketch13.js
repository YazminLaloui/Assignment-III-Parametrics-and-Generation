function setup(){

    createCanvas(1000,1000);
    background(123, 255, 46);
    
}
function draw(){ //open draw


    textSize(600);
    text('w', 250, 620);
    fill(0, 184, 40);
    filter( BLUR, 6 );


    textSize(600);
    text('w', 250, 620);
    nofill();
    stroke(255, 0, 0);
    strokeWeight(3); // Thicker

}
