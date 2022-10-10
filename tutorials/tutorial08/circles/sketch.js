function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
noFill();
drawCircle(100, 200, 50);
drawGrid(canvasWidth, canvasHeight);
}

drawCircle(centerX, centerY, size)
{
count= 0;
while(count < 6){
count=count+1;
circle(centerX, centerY, size);
centerY = centerY+(count*50);
    }
}



