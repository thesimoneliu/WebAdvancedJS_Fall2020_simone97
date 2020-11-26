// let r = random(0, 255);
// let g = random(0, 255);
// let b = random(0, 255);

var socket;

function setup() {
    createCanvas(600, 600);
    background(0);
    socket = io.connect("http://localhost:3000")
    socket.on("mouse", newDrawing);
}

function newDrawing(data) {
    fill(255, 0, 255);
    noStroke();
    ellipse(data.x, data.y, 40, 20);
}

function mouseDragged() {
    console.log(mouseX, ",", mouseY);

    var data = {
        x: int(mouseX),
        y: int(mouseY)
    }
    socket.emit("mouse", data);

    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 30);
    // if (mousePressed() == true) {
    //     colorL = r, g, b;
    //     ellipse(mouseX, mouseY, 50);
    // }
}