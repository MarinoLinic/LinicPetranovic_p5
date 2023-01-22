let ptica = false

function setup() {
	createCanvas(300, 300)
	textAlign(CENTER, CENTER)
	textSize(144)
}

function draw() {
	if (ptica) {
		background(0, random(80, 120), 0)
		text('🐣', width / 2, height / 2 + random(-50, 50))
	} else {
		background(10)
		text('🥚', width / 2, height / 2)
	}
}

function mousePressed() {
	ptica = !ptica
}

function moussePressed() {
	promjena = !promjena
}
