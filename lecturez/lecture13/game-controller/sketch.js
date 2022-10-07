let x = 100;
let y = 200;
let width = 50;
let fillColor = 'purple';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width, fillColor);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyW'){
        y = y-2;
        console.log('GO up!');

     }else if(ev.code == 'KeyA'){
        console.log('GO left!');
        x = x-2;

     }else if (ev.code == 'KeyS'){
        console.log('GO down!');
        y = y+2;

      } else if (ev.code == 'KeyD'){
        console.log('GO right!');
        x = x+2;
      }else if (ev.code == 'Space'){
        console.log('size up!')
        width= width + 69;
      }else if (ev.code == 'KeyC'){}
    
    // a moves circle left
    // d moves circle right
    // w moves circle up
    // s moves circle down

    // redraw circle:
    clear();
    noFill();
    circle(x, y, width, fillColor);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
