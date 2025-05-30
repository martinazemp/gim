let posX 
let velX
let posY 
let velY

function setup() {
	createCanvas(500, 400)

	posX = 200
	velX = 7

	posY = 300
	velY = 5
}

function draw() {

	posX = posX + velX
	posY = posY + velY

	if(posX >= width) {
		velX = -velX
	} else if (posX < 0){  
		velX = -velX
	}

	if(posY >= height) {
		velY = -velY
	} else if (posY < 0){  
		velY = -velY
	}

	background(190)

	ellipse(posX, posY, 25)

}