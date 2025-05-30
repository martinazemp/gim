let fiocchi = []

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
}

for (let i = 0; i = < 500; i++){ 
	fiocchi.push({ 
		px: random(0, width),
		py: random(-100, 0),
		pz: random(-500, 500),
		dim: random(10, 20),
		vel: random(1, 3)
	})
}

function draw() {
	background(0)
	fill(255)
	textAlign(CENTER, CENTER)

	for (let i = 0; i < fiocchi.length; i++) {
		push()
		translate(fiocchi[i].x, fiocchi[i].y, fiocchi[i].z)
		sphere(fiocchi[i].dim)
		pop()

//for (let i = 0; i < fiocchi.length; i++) {
	//fiocchi[i].px += random(-1.5, 1.5)
	//fiocchi[i].py += fiocchi[i].vel
	
	//if (fiocchi[i].py > height) { 
		//fiocchi[i].py = 0
	}

	textSize(fiocchi[i].dim);
    text("*", fiocchi[i].px, fiocchi[i].py);

}
	

	//rotateX(-mouseY * 0.01)
	//rotateY(-mouseX * 0.01)
	
	//box(100, 100, 100)
	
	

	
//for (let i=0; i<1000; i++) {
		//let fiocchi[i] = random(10, 150)
}

	
	function windowResized() {
		resizeCanvas(windowWidth, windowHeight)
	}