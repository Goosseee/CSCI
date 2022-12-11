function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 100, 'red');
    drawCircle(200, 100, 50, 'red');
    drawCircle(300, 100, 100, 'red');
    drawCircle(400, 100, 50, 'red');

    // Exercise 2: 
    drawOval(100, 200, 100, 50, 'teal');
    drawOval(200, 200, 50, 100, 'pink');
    drawOval(300, 200, 100, 50, 'teal');
    drawOval(400, 200, 50, 100, 'pink');

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(100, 300, 100);
    drawBullseye(100, 300, 100);
    drawBullseye(100, 300, 100);

    drawBullseye(200, 300, 50);
    drawBullseye(200, 300, 50);
    drawBullseye(200, 300, 50);
    drawBullseye(200, 300, 50);

    drawBullseye(300, 300, 100);
    drawBullseye(300, 300, 100);
    drawBullseye(300, 300, 100);
    drawBullseye(300, 300, 100);

    drawBullseye(400, 300, 50);
    drawBullseye(400, 300, 50);
    drawBullseye(400, 300, 50);
    drawBullseye(400, 300, 50);


    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);
    drawGrid(canvasWidth, canvasHeight);



}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, height, width, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, height, width);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillColor = 'teal', fillColor2 = 'lavender') {  
    circle(centerX, centerY, size);
    fill(fillColor2)
    circle(centerX, centerY, size*.75);
    fill(fillColor)
    circle(centerX, centerY, size*.50);
    fill(fillColor2)
    circle(centerX, centerY, size*.25);
    fill(fillColor)

    circle(centerX, centerY, size);
    fill(fillColor2)
    circle(centerX, centerY, size*.75);
    fill(fillColor)
    circle(centerX, centerY, size*.50);
    fill(fillColor2)
    circle(centerX, centerY, size*.25);
    fill(fillColor)

    circle(centerX, centerY, size);
    fill(fillColor2)
    circle(centerX, centerY, size*.75);
    fill(fillColor)
    circle(centerX, centerY, size*.50);
    fill(fillColor2)
    circle(centerX, centerY, size*.25);
    fill(fillColor)

    circle(centerX, centerY, size);
    fill(fillColor2)
    circle(centerX, centerY, size*.75);
    fill(fillColor)
    circle(centerX, centerY, size*.50);
    fill(fillColor2)
    circle(centerX, centerY, size*.25);
    fill(fillColor)
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, red="orange", fillColor='black')
 {
    fill(red)
    circle(centerX, centerY, size);
    fill(fillColor);
    let sf = size/6.5;
    circle(centerX-sf,centerY-sf,sf);
    circle(centerX+sf,centerY-sf,sf);

    noFill()
    strokeWeight(sf/5)
    curve(
        centerX-sf*2, centerY-size,
        centerX-sf*2,  centerY+sf, 
        centerX+sf*2, centerY+sf, 
        centerX+sf*2, centerY-size,  
    )
    strokeWeight(1)
 }

