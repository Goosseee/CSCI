const canvasWidth= window.innerWidth; 
const canvasHeight= window.innerHeight;

let x = canvasWidth/2;
let y = canvasHeight/2;
let width = 50;


const aliens =[
    {x:300, y:150},
    {x: 500, y:150}
]

const bubbles= []; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
    noFill();
    circle(x,y, width);
    displayMessage();

    drawAlien(aliens)

}


function drawAlien(grid, x, y, size, ){
        let i = 0; 
        while(i < grid.length){
            drawDog(grid[i])
            i++;
        }
    }

    function drawDog(x, y, size){
        let i = 0; 
        let centerX = row[i];
        let centerY = row[i+1];
        let size = row[i+2];


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
    
function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 10;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 10;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 10;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x +=10;
    } else if (ev.code == 'Space') {
        width += 2;
    } else if (ev.code == 'Escape') {
        width -= 2;
    }
        // redraw circle:
        clear();
        noFill();
        circle(x, y, width);            
}


function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("ur mom gay", canvasWidth/2, canvasHeight/2);
}

document.addEventListener('keydown', moveController);