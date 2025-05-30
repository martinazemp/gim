
let fiocchi = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  
  // Genera fiocchi 
  for (let i = 0; i < 500; i++) {
    fiocchi.push({
      px: random(width),
      py: random(height), 
      dim: random(10, 20),
      vel: random(1, 3)
    });
  }
}

function draw() {
  background(0);
  fill(255);

  for (let i = 0; i < fiocchi.length; i++) {
    const f = fiocchi[i];

    // Movimento orizzontale e caduta
    f.px += random(-1.5, 1.5);
    f.py += f.vel;

    // Se un fiocco supera il bordo inferiore, ricomincia dall'alto
    if (f.py > height) {
      f.py = random(-50, 0); 
      f.px = random(width);
    }

    textSize(f.dim);
    text("*", f.px, f.py);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
