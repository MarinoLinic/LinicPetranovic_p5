// Try changing these values!
const duljinaRepa = 25
const velDuha = 100
const lutanje = 18
const plutanje = 2

let ghostX
let ghostY
const tail = []

function setup() {
	createCanvas(500, 500)
	ghostX = width / 2
	ghostY = height / 2
}

function draw() {
	ghostX += cos(frameCount / 25) * lutanje
	ghostY -= plutanje

	if (ghostY < -velDuha) {
		ghostY = height + velDuha
	}

	tail.unshift({ x: ghostX, y: ghostY })

	if (tail.length > duljinaRepa) {
		tail.pop()
	}

	background(10)
	noStroke()

	// Crtanje repa i točaka
	for (var index = 0; index < tail.length; index++) {
		const tailPoint = tail[index]

		const pointSize = (velDuha * (tail.length - index)) / tail.length
		const pointAlpha = (255 * (tail.length - index)) / tail.length

		fill(188, pointAlpha)
		ellipse(tailPoint.x, tailPoint.y, pointSize)
	}

	// Crtanje lica
	fill(32)
	ellipse(ghostX - velDuha * 0.4, ghostY - velDuha * 0.1, velDuha * 0.4)
	ellipse(ghostX + velDuha * 0.4, ghostY - velDuha * 0.1, velDuha * 0.4)
	ellipse(ghostX, ghostY + velDuha * 0.2, velDuha * 0.2)
}
