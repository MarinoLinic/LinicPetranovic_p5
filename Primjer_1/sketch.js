let particles = []

function setup() {
	createCanvas(windowWidth, windowHeight * 0.8)
	colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
	background(4)

	if (mouseIsPressed) {
		let mouse = createVector(mouseX, mouseY)

		for (let i = 0; i < 5; i++) {
			let p = new Particle(mouse)
			particles.push(p)
		}
	}

	for (let i = particles.length - 1; i >= 0; i--) {
		let p = particles[i]
		p.update()
		p.show()
		if (p.finished()) {
			particles.splice(i, 1)
		}
	}
}

class Particle {
	constructor(pos) {
		this.pos = pos.copy()
		this.vel = createVector(0, 0)
		this.acc = createVector(0, 0)
		this.lifespan = 255
	}

	update() {
		this.vel.add(this.acc)
		this.pos.add(this.vel)
		this.lifespan -= 2
	}

	show() {
		// stroke(0, this.lifespan)
		// strokeWeight(2)
		fill(360 * noise(frameCount * 0.01), 255, 255, this.lifespan)
		ellipse(this.pos.x, this.pos.y, 10, 10)
	}

	finished() {
		return this.lifespan < 0
	}
}
