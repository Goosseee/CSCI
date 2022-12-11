function drawGrid(canvasWidth, canvasHeight) {
    textSize(10);
    textStyle(NORMAL);
    for (let x = 0; x < canvasWidth; x += 50) {
		for (let y = 0; y < canvasHeight; y += 50) {
			stroke(0);
            fill(0);
			strokeWeight(1);
			line(x, 0, x, canvasHeight);
			line(0, y, canvasWidth, y);
            if ((x + 100) % 200 == 0 && (y + 100) % 100 == 0) {
			    strokeWeight(8);
                point(x, y);
                strokeWeight(0);
                text(`(${x}, ${y})`, x + 5, y + 20);
            }
            strokeWeight(1);
		}
	}
}