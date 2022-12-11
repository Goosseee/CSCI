function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    drawCreature(800,400,300, 'green', 'green');

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}
// define your drawCreature function here:

function drawCreature(centerX, centerY, size, fillColor, fillColor2, height, width){
    fill(fillColor);
    circle(centerX, centerY, size, fillColor);
    fill('black')
    let sf = size/2.5;
    circle(centerX-sf,centerY-sf,sf);
    circle(centerX+sf,centerY-sf,sf);
    fill('white')
    sf = size/2.5
    circle(centerX-sf,centerY-sf,sf*.7);
    circle(centerX+sf,centerY-sf,sf*.7);
    
    noFill()
    strokeWeight(sf/5)
    curve(
        centerX-sf/ 2, centerY-size,
        centerX-sf/2,  centerY+sf/2.5, 
        centerX+sf/2, centerY+sf/2.5, 
        centerX+sf/2, centerY-size,  
    )
    strokeWeight(1)
}