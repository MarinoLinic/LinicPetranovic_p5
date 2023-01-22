let x;
let y;
let r;
let g;
let b;

function setup() {
  createCanvas(1080, 1080);
  x = width / 2;
  y = height / 2;

  r = random(255);
  g = random(255);
  b = random(255);

  background(32);
}

function draw() {

  let nextX = x + random(-50, 50);
  let nextY = y + random(-50, 50);
  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);

  r += random(-10, 10);
  g += random(-10, 10);
  b += random(-10, 10);
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  line(x, y, nextX, nextY);

  x = nextX;
  y = nextY;
}