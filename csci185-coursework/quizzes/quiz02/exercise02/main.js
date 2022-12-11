const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:

    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn

    drawGrid(canvasWidth, canvasHeight);
}


function drawElmo(centerX, centerY, size, fillColor, display){
fill(fillColor);
circle(centerX, centerY, size);
sf = size/2

fill('white');
circle(centerX-sf*.375, centerY-sf/2, size/5);
fill('black');
circle(centerX-sf*.375, centerY-sf/2, size/10);

fill('white');
circle(centerX+sf*.375, centerY-sf/2, size/5)
fill('black');
circle(centerX+sf*.375, centerY-sf/2, size/10)


 if (display ==true){
 
fill('#db5461');
ellipse(centerX-sf*0, centerY, sf*.75, sf);  // x, y, width, height (but yours needs to scale)
}
}





// function definition goes here:
