const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let color= 'black';

function draw() {
    frameRate(60);
    clear();

    if (x>=500-width/2){
        speed = speed *-1;

    }
    else if (x<=150+width/2){
        speed *= -1;

    }
    

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, width);
    x += speed;
    // console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
  
}

const changeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        color='red';
    }else if (ev.code == 'KeyE') {
        color='green';
    }if (ev.code == 'Space') {
        x += 180;  
    }if (ev.code == 'KeyL'){
        width += 20;
    }
}


// Add event listener on keydown
document.addEventListener('keydown', changeBallColor);
