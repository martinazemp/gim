function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  rectMode(CENTER);
  noFill();
  textAlign(CENTER, CENTER);
  noCursor();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(PI / 2); // 🔁 Corregge l'orientamento dell'intero orologio

  // Ora in Svizzera
  let swissTimeString = new Date().toLocaleString("en-US", { timeZone: "Europe/Zurich" });
  let date = new Date(swissTimeString);
  let h = date.getHours() % 12 + date.getMinutes() / 60;
  let m = date.getMinutes() + date.getSeconds() / 60;
  let s = date.getSeconds();

  // Effetto rotante esterno
  strokeWeight(2);
  for (let i = 0; i < 360; i += 10) {
    let alpha = map(sin(frameCount * 0.05 + radians(i)), -1, 1, 50, 200);
    stroke(100, 200, 255, alpha);
    let r1 = 210;
    let r2 = 230;
    let angle = radians(i) + frameCount * 0.01;
    let x1 = cos(angle) * r1;
    let y1 = sin(angle) * r1;
    let x2 = cos(angle) * r2;
    let y2 = sin(angle) * r2;
    line(x1, y1, x2, y2);
  }

  // Quadrante esagonale 
  stroke(150, 100, 255, 150);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i - PI / 2;
    let x = cos(angle) * 180;
    let y = sin(angle) * 180;
    vertex(x, y);
  }
  endShape(CLOSE);

  // 12 pallini 
  noStroke();
  fill(0, 200, 255, 120);
  for (let i = 0; i < 12; i++) {
    let angle = TWO_PI / 12 * i - HALF_PI;
    let r = 140; 
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    ellipse(x, y, 8, 8); 
  }

  // Ore 
  push();
  let angleH = map(h, 0, 12, 0, TWO_PI) - PI / 2;
  rotate(angleH);
  noStroke();
  fill(150, 50, 255, 150);
  triangle(-15, 25, 15, 25, 0, -70);
  stroke(150, 50, 255, 120);
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 70);
  pop();

  // Minuti 
  push();
  let angleM = map(m, 0, 60, 0, TWO_PI) - PI / 2;
  rotate(angleM);
  noStroke();
  fill(0, 200, 255, 180);
  triangle(-15, 25, 15, 25, 0, -110);
  stroke(0, 200, 255, 100);
  strokeWeight(6);
  noFill();
  ellipse(0, 0, 100);
  pop();

  // Secondi 
  push();
  let angleS = map(s, 0, 60, 0, TWO_PI) - PI / 2;
  rotate(angleS);
  let pulse = map(sin(frameCount * 0.2), -1, 1, 50, 255);
  stroke(150, 50, 255, pulse);
  strokeWeight(4);
  line(0, 20, 0, -120);
  pop();

  // Centro 
  let centerPulse = map(sin(frameCount * 0.05), -1, 1, 10, 20);
  noStroke();
  fill(100, 50, 255, 200);
  ellipse(0, 0, centerPulse);
  fill(255);
  ellipse(0, 0, centerPulse / 3);
}
