function setup() {
	createCanvas(windowWidth, windowHeight * 0.8)
	angleMode(DEGREES)
}

function draw() {
	background(10)
	translate(width / 2, height / 2)
	rotate(-60)

	let s = map(second(), 0, 60, 0, 360)
	let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, 360)
	let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, 360)

	stroke(255)

	// draw the ticks
	strokeWeight(2)
	for (let i = 0; i < 360; i += 6) {
		push()
		rotate(i)
		line(100, 0, 120, 0)
		pop()
	}

	// draw the numbers
	strokeWeight(1)
	fill(255)
	textSize(20)
	for (let i = 0; i < 12; i++) {
		push()
		rotate(30 * i) // 360
		text(i + 1, 145, 0)
		pop()
	}

	// draw the hands
	stroke(255, 100, 150)
	strokeWeight(2)
	push()
	rotate(s)
	line(0, 0, 100, 0)
	pop()

	stroke(150, 100, 255)
	strokeWeight(3)
	push()
	rotate(m)
	line(0, 0, 75, 0)
	pop()

	stroke(150, 0, 50)
	strokeWeight(5)
	push()
	rotate(h)
	line(0, 0, 50, 0)
	pop()

	// draw the center point
	stroke(10)
	strokeWeight(10)
	point(0, 0)
}
