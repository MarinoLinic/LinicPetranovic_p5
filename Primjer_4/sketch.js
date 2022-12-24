const numEllipses = 500
let ellipses = []
let gravity = 0.1

function setup() {
	createCanvas(windowWidth, windowHeight * 0.8)
	for (let i = 0; i < numEllipses; i++) {
		ellipses[i] = {
			x: width / 2,
			y: height / 2,
			xSpeed: random(-2, 2),
			ySpeed: random(-2, 2),
			size: random(5, 15),
			color: color(random(255), random(255), random(255)),
		}
	}
}

function draw() {
	background(10)
	for (let i = 0; i < numEllipses; i++) {
		let e1 = ellipses[i]
		let dx = mouseX - e1.x
		let dy = mouseY - e1.y
		let dist = sqrt(dx * dx + dy * dy)
		let force = dist * 0.01
		e1.xSpeed += (dx / dist) * force
		e1.ySpeed += (dy / dist) * force
		e1.x += e1.xSpeed
		e1.y += e1.ySpeed
		e1.ySpeed += gravity
		e1.xSpeed = constrain(e1.xSpeed, -5, 5)
		e1.ySpeed = constrain(e1.ySpeed, -5, 5)
		for (let j = 0; j < numEllipses; j++) {
			if (i === j) continue
			let e2 = ellipses[j]
			let dx = e2.x - e1.x
			let dy = e2.y - e1.y
			let dist = sqrt(dx * dx + dy * dy)
			let minDist = 10
			if (dist < minDist) {
				let force = (minDist - dist) * 0.01
				e1.xSpeed -= (dx / dist) * force
				e1.ySpeed -= (dy / dist) * force
			}
		}
		fill(e1.color)
		ellipse(e1.x, e1.y, e1.size, e1.size)
	}
}
