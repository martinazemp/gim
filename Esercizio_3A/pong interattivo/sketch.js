let ballX, ballY, ballVelX, ballVelY;
let paddleH = 80;
let paddleW = 10;

let playerY;
let aiY;

let playerSpeed = 6;
let aiSpeed = 4;

let upPressed = false;
let downPressed = false;

function setup() {
  createCanvas(600, 400);
  ballX = width / 2;
  ballY = height / 2;
  ballVelX = 5;
  ballVelY = 3;

  playerY = height / 2 - paddleH / 2;
  aiY = height / 2 - paddleH / 2;
}

function draw() {
  background(0); // Sfondo nero

  // Linea tratteggiata centrale
  stroke(255);
  strokeWeight(2);
  for (let y = 0; y < height; y += 20) {
    line(width / 2, y, width / 2, y + 10);
  }
  noStroke();

  // Muovi la palla
  ballX += ballVelX;
  ballY += ballVelY;

  // Rimbalzo su bordi alto/basso
  if (ballY < 0 || ballY > height) {
    ballVelY *= -1;
  }

  // Rimbalzo su paddle giocatore
  if (
    ballX + 10 > width - paddleW &&
    ballY > playerY &&
    ballY < playerY + paddleH
  ) {
    ballVelX *= -1;
  }

  
  if (
    ballX - 10 < paddleW &&
    ballY > aiY &&
    ballY < aiY + paddleH
  ) {
    ballVelX *= -1;
  }

 
  if (ballX < 0 || ballX > width) {
    resetBall();
  }

  // Muovi paddle giocatore
  if (upPressed) playerY -= playerSpeed;
  if (downPressed) playerY += playerSpeed;
  playerY = constrain(playerY, 0, height - paddleH);

  // Muovi paddle AI
  if (ballY > aiY + paddleH / 2) aiY += aiSpeed;
  else if (ballY < aiY + paddleH / 2) aiY -= aiSpeed;
  aiY = constrain(aiY, 0, height - paddleH);

  // Disegna palla
  fill(255);
  ellipse(ballX, ballY, 20);

  // Disegna paddle
  rect(0, aiY, paddleW, paddleH); // AI
  rect(width - paddleW, playerY, paddleW, paddleH); // Giocatore
}

function resetBall() {
  ballX = width / 2;
  ballY = height / 2;
  ballVelX *= -1;
  ballVelY = random(-3, 3);
}

// Gestione input tastiera
function keyPressed() {
  if (keyCode === UP_ARROW) upPressed = true;
  if (keyCode === DOWN_ARROW) downPressed = true;
}

function keyReleased() {
  if (keyCode === UP_ARROW) upPressed = false;
  if (keyCode === DOWN_ARROW) downPressed = false;
}
