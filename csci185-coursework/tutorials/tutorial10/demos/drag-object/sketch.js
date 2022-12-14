const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(data.x, data.y, data.d);
}

const data = {
    x: 100,
    y: 100,
    d: 100,
    color: 'white'
}

// function mouseClicked(){
//     data.x = mouseX;
//     data.y= mouseY;
// }

function mouseDragged() {
    data.x = mouseX;
    data.y= mouseY;
    } 


function mouseReleased() {
    data.color = 'white';
}

function draw() {
    clear();
    fill(data.color);
    circle(data.x, data.y, data.d);

    // message
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Drag the circle.", canvasWidth/2, canvasHeight/2);
}