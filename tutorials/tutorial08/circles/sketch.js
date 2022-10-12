function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');

// 1. What do we want to repeat? A: Draw a circle
//2. How long do we want to repeat? A: 5 times 
//3. What is going to change each time? A: Y position by 50 


noFill();
let x = canvasWidth/2;
let y = canvasHeight/2;
let size =2000;
while (size >= 0){
circle(x, y, size)
size-=25;
    if (size%50==0){
        fill('black');
    }else{
        fill('orange');
    }
x+=Math.sin(x);
}


// circle(100, 250, 50);
// circle(100, 300, 50);
// circle(100, 350, 50);
// circle(100, 400, 50);
drawGrid(canvasWidth, canvasHeight);
}




