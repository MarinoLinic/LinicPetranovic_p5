let angle
let colorIndex = 0

function setup() {
	createCanvas(400, 400, WEBGL)
	angle = 0
}

function draw() {
	let colors = [
		color(255, 49, 49),
		color(127, 255, 0),
		color(15, 240, 252),
		color(255, 20, 147),
		color(188, 19, 254),
		color(255, 240, 31),
		color(85, 254, 19),
	]
	background(10)
	rotateX(mouseY * 0.01)
	rotateY(mouseX * 0.01)
	rotateZ(angle * 0.7)
	fill(colors[colorIndex])
	strokeWeight(5)
	box(150)
	angle += 0.01
}

function mousePressed() {
	let colors = [
		color(255, 49, 49),
		color(127, 255, 0),
		color(15, 240, 252),
		color(255, 20, 147),
		color(188, 19, 254),
		color(255, 240, 31),
		color(85, 254, 19),
	]
	colorIndex = (colorIndex + 1) % colors.length
}
