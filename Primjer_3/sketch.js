const rows = 100
const cols = 100
let grid = []
let nextGrid = []
let music

function preload() {
	music = loadSound('La_campanella_.mp3')
}

function setup() {
	createCanvas(windowWidth, windowHeight * 0.8)
	music.loop()
	for (let i = 0; i < rows; i++) {
		grid[i] = []
		nextGrid[i] = []
		for (let j = 0; j < cols; j++) {
			grid[i][j] = floor(random(2))
			nextGrid[i][j] = 0
		}
	}
}

function draw() {
	background(10)
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] == 1) {
				fill(random(255), random(255), 255)
			} else {
				fill(10)
				noStroke()
			}
			rect(i * 8, j * 8, 5, 5)
		}
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let state = grid[i][j]
			let neighbors = countNeighbors(grid, i, j)

			if (state == 0 && neighbors == 3) {
				nextGrid[i][j] = 1
			} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
				nextGrid[i][j] = 0
			} else {
				nextGrid[i][j] = state
			}
		}
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			grid[i][j] = nextGrid[i][j]
		}
	}
}

function countNeighbors(grid, x, y) {
	let sum = 0
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			let row = (x + i + rows) % rows
			let col = (y + j + cols) % cols
			sum += grid[row][col]
		}
	}
	sum -= grid[x][y]
	return sum
}
