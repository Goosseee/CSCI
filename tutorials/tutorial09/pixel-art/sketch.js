const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
];
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);

    let x = 150;
    let y = 150;
    let pixel = 25;



 
    // drawRow(frank[1], x,y , 25);
    // drawRow(frank[2], x ,y , 25);
    // drawRow(frank[3], x, y, 25);
    // drawRow(frank[4], , , 25);
    // drawRow(frank[5], , , 25);

    // first 6 rows of the heart
    // drawRow(heart[0], 450, 350, 15);
    // drawRow(heart[1], 450, 365, 15);
    // drawRow(heart[2], 450, 380, 15);
    // drawRow(heart[3], 450, 395, 15);
    // drawRow(heart[4], 450, 410, 15);
    // drawRow(heart[5], 450, 425, 15);
    drawPixelArt(heart, 100, 200, 10,  palette=['transparent', 'orange','black', 'yellow']);
    drawPixelArt(heart, 400, 200, 10);
    drawPixelArt(heart, 300, 400, 5);
    drawPixelArt(frank, 400, 500, 2);

}

function drawPixelArt(grid, x, y, pixel, palette) {
    let i = 0;
    while(i < grid.length){
        drawRow(grid[i], x, y, pixel, palette);
        y+= pixel;
        i+=1;
    }
}

function drawRow (row, topX, topY, pixelWidth, 
    palette=['transparent', 'hotpink','black', 'white']) {

    let i = 0;
    strokeWeight(0);
    while ( i < row.length) {
        let cell = row[i];
        fill(palette[cell]);
        square(topX, topY, pixelWidth)
        topX += pixelWidth;
        i++;
    }


}
