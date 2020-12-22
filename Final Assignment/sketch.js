
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.class('p5canvas');
  
  
  // translate(-900,-500);
  noStroke();
	mouseMoved();
  
  frameRate(100);
}

// Don't use draw() if you don't have to!
function mouseMoved() {
  background(255);
  
  fill(0);

  for(let x = 0; x <= width; x += 20) {
    for(let y = 0; y <= height; y += 20) {
			circle(x, y, dist(mouseX, mouseY, x, y) / 5 * noise(0.9))
      // rect(x, y, dist(mouseX, mouseY, x, y) / 5 * noise(0.9));
    }
  }
}