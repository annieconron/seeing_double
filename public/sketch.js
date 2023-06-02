let capture;
let r, g, b;

function setup() {
  createCanvas(800, 600);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  noStroke();
  background(255);
  rectMode(CENTER);
  
  // Initialize RGB values
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  for (let i = 0; i < 30; i++) {
    const x = random(width);
    const y = random(height);
    const c = capture.get(x, y);

    const videoR = red(c);
    const videoG = green(c);
    const videoB = blue(c);

    const col = color(videoR, videoG, videoB, 30);
    fill(col);
    circle(x, y, random(20, 60));
  }
}

function mousePressed() {
  clear();
}

