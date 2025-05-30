let posX;
let velX;
let posY;
let velY;
let hueValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  posX = random(width);
  velX = random(3, 6);

  posY = random(height);
  velY = random(3, 6);

  background(0);
}

function draw() {

  fill(0, 0, 0, 10);
  rect(0, 0, width, height);


  posX += velX;
  posY += velY;


  if (posX >= width || posX < 0) velX *= -1;
  if (posY >= height || posY < 0) velY *= -1;


  hueValue = (hueValue + 1) % 360;


  push();
  translate(posX, posY);
  rotate(frameCount * 0.05);

  for (let i = 0; i < 8; i++) {
    fill((hueValue + i * 30) % 360, 80, 100, 80);
    ellipse(cos(TWO_PI * i / 8) * 20, sin(TWO_PI * i / 8) * 20, 20, 20);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

