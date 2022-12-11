const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


const data = {
    x: 100,
    y: 100,
    d: 250,
}
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
}

function mouseDragged() {
    data.x = mouseX;
    data.y= mouseY;

    if (data.x <= canvasWidth/4){
        background('#ff595e');
    }else if (data.x <= canvasWidth*.5){
        background('#FFD580');
    }else if (data.x <= canvasWidth*.75){
        background('lightyellow');
    }
    else {
        background('#90ee90');
     }
    } 

// replace this function with YOUR creature!
function draw(){
    fill('green');
    circle(data.x, data.y, data.d);
    fill('black')
    let sf = data.d/2.5;
    circle(data.x-sf,data.y-sf,sf);
    circle(data.x+sf,data.y-sf,sf);
    fill('white')
    sf = data.d/2.5
    circle(data.x-sf,data.y-sf,sf*.7);
    circle(data.x+sf,data.y-sf,sf*.7);
    
    noFill()
    strokeWeight(sf/5)
    curve(
        data.x-sf/ 2, data.y-data.d,
        data.x-sf/2,data.y+sf/2.5, 
        data.x+sf/2, data.y+sf/2.5, 
        data.x+sf/2, data.y-data.d,  
    )
    strokeWeight(1)
}


 


