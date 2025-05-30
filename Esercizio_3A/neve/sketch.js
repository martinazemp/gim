let fiocchi = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 500; i++) {
    fiocchi.push({
      px: random(0, width),
      py: random(-100, 0),
      dim: random(10, 20),
      vel: random(1, 3)
    });
  }
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < fiocchi.length; i++) {
    fiocchi[i].px += random(-1.5, 1.5);
    fiocchi[i].py += fiocchi[i].vel;

    if (fiocchi[i].py > height) {
      fiocchi[i].py = 0;
    }

    textSize(fiocchi[i].dim);
    text("*", fiocchi[i].px, fiocchi[i].py);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}